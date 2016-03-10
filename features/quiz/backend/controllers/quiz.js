'use strict';

let _ = require('arrowjs')._;
let Promise = require('arrowjs').Promise;
let logger = require('arrowjs').logger;

module.exports = function (controller, component, app) {

    let baseRoute = '/admin/quiz/';
    let permissionManageAll = 'quiz_manage_all';

    controller.quizList = function (req, res) {
        let page = req.params.page || 1;
        let itemOfPage = app.getConfig('pagination').numberItem || 10;

        let tableStructure = [
            {
                column: 'id',
                header: '',
                type: 'checkbox',
                width: '1%'
            },
            {
                column: 'title',
                header: 'Tiêu đề',
                link: baseRoute + '{id}',
                filter: {
                    data_type: 'string'
                },
                width: '25%'
            },
            {
                column: 'user.display_name',
                width: '20%',
                header: 'Tác giả',
                filter: {
                    type: 'select',
                    filter_key: 'created_by',
                    data_source: 'SELECT id, display_name FROM arr_user WHERE id in (SELECT DISTINCT created_by FROM quiz)',
                    source_type: 'query',
                    display_key: 'display_name',
                    value_key: 'id'
                }
            }
        ];

        let toolbar = new ArrowHelper.Toolbar();
        toolbar.addRefreshButton(baseRoute);
        toolbar.addSearchButton();
        toolbar.addCreateButton(true, baseRoute + 'create');
        toolbar.addDeleteButton();
        toolbar = toolbar.render();

        // Check permissions view all quizzes: If user does not have permission manage all, only show own quizzes
        let customCondition = "";
        if (req.permissions.indexOf(permissionManageAll) == -1) customCondition += " AND created_by = " + req.user.id;

        // Config columns
        let filter = ArrowHelper.createFilter(req, res, tableStructure, {
            rootLink: baseRoute + 'page/$page/sort',
            limit: itemOfPage,
            customCondition: customCondition,
            backLink: 'quiz_back_link'
        });

        app.feature.quiz.actions.findAndCountAll({
            include: [
                {
                    model: app.models.user,
                    attributes: ['display_name'],
                    where: ['1 = 1']
                }
            ],
            where: filter.conditions,
            order: filter.order,
            limit: filter.limit,
            offset: filter.offset
        }).then(function (results) {
            let totalPage = Math.ceil(results.count / itemOfPage);

            res.backend.render('index', {
                title: 'Danh sách Quiz',
                toolbar: toolbar,
                totalPage: totalPage,
                currentPage: page,
                items: results.rows,
                queryString: (req.url.indexOf('?') == -1) ? '' : ('?' + req.url.split('?').pop()),
                baseRoute: baseRoute
            });
        }).catch(function (err) {
            logger.error(err);
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);

            // Render view if has error
            res.backend.render('index', {
                title: 'Danh sách Quiz',
                totalPage: 1,
                items: null,
                currentPage: page,
                queryString: (req.url.indexOf('?') == -1) ? '' : ('?' + req.url.split('?').pop()),
                baseRoute: baseRoute
            });
        });
    };

    controller.quizCreate = function (req, res) {
        let toolbar = new ArrowHelper.Toolbar();
        toolbar.addBackButton(req, 'quiz_back_link');
        toolbar.addSaveButton(true);

        app.feature.category.actions.findAll({
            where: {
                type: 'quiz_category'
            },
            order: 'name ASC'
        }).then(function (categories) {
            res.backend.render('new', {
                title: 'New Quiz',
                categories: categories,
                baseRoute: baseRoute,
                toolbar: toolbar.render()
            });
        }).catch(function (err) {
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);
            res.redirect(baseRoute);
        });
    };

    controller.quizSave = function (req, res, next) {
        let data = req.body;
        data.created_by = req.user.id;
        let quiz_id = 0;

        // Create quiz
        app.feature.quiz.actions.create(data).then(function (quiz) {
            quiz_id = quiz.id;

            // Update count of categories
            let categoryAction = app.feature.category.actions;
            let categories = quiz.categories;
            if (categories) {
                categories = categoryAction.convertToArray(categories);
                return categoryAction.updateCount(categories, 'quiz', 'categories');
            } else {
                return null;
            }
        }).then(function () {
            return Promise.map(data.answer_text, function (answer_text, index) {
                return app.feature.quiz.actions.createAnswer(answer_text, {
                    quiz_id: quiz_id,
                    answer_text: answer_text,
                    status: (data.correct.indexOf(index.toString()) !== -1),
                    created_by: req.user.id
                });
            });
        }).then(function () {
            req.flash.success('Tạo mới câu hỏi thành công');
            res.redirect(baseRoute + quiz_id);
        }).catch(function (err) {
            logger.error(err);
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);
            res.locals.quiz = data;
            next();
        });
    };

    controller.quizView = function (req, res) {
        let quiz = req.quiz;

        // Nếu không có quyền quiz_manage_all và không phải tác giả của quiz thì không được sửa
        if (req.permissions.indexOf(permissionManageAll) === -1 && quiz.created_by != req.user.id) {
            req.flash.error("Bạn không có quyền chỉnh sửa câu hỏi này");
            return next();
        }

        // Tạo toolbar
        let toolbar = new ArrowHelper.Toolbar();
        toolbar.addBackButton(req, 'quiz_back_link');
        toolbar.addSaveButton(true);
        toolbar.addDeleteButton(true);

        // Lấy danh mục quiz
        app.feature.category.actions.findAll({
            where: {
                type: 'quiz_category'
            },
            order: 'name ASC'
        }).then(function (categories) {
            // Render view
            res.backend.render('new', {
                title: 'Update quiz',
                categories: categories,
                quiz: quiz,
                baseRoute: baseRoute,
                toolbar: toolbar.render()
            });
        }).catch(function (err) {
            logger.error(err);
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);
            res.redirect(baseRoute);
        });
    };

    controller.quizUpdate = function (req, res, next) {
        let quiz = req.quiz;

        // Nếu không có quyền quiz_manage_all và không phải tác giả của quiz thì không được sửa
        if (req.permissions.indexOf(permissionManageAll) === -1 && quiz.created_by != req.user.id) {
            req.flash.error("Bạn không có quyền chỉnh sửa câu hỏi này");
            return res.redirect(baseRoute);
        }

        let data = req.body;

        let categoryAction = app.feature.category.actions;
        let quizAction = app.feature.quiz.actions;

        // Lấy ra những danh mục đã thay đổi
        let categories = quiz.categories ? categoryAction.convertToArray(quiz.categories) : [];
        let newCategories = data.categories ? categoryAction.convertToArray(data.categories) : [];
        let needUpdate = _.union(categories, newCategories);

        quizAction.update(quiz, data).then(function () {
            // Cập nhật lại count của danh mục đã thay đổi
            return categoryAction.updateCount(needUpdate, 'quiz', 'categories');
            ;     }).then(function () {
            console.log(data)
            let answer_ids = data.answer_text.split(',');

            return Promise.map(data.answer_text, function (text, index) {
                if (answer_ids[index]) {
                    // Cập nhật câu trả lời có sẵn
                    return quizAction.findAnswerById(answer_ids[index]).then(function (quiz_answer) {
                        return quizAction.updateAnswer(quiz_answer, {
                            answer_text: text,
                            status: (data.correct.indexOf(index.toString()) !== -1)
                        });
                    });
                } else {
                    // Tạo câu trả lời mới
                    return quizAction.createAnswer({
                        quiz_id: quiz.id,
                        answer_text: text,
                        status: (data.correct.indexOf(index.toString()) !== -1),
                        created_by: req.user.id
                    });
                }
            });
        }).then(function () {
            req.flash.success('Cập nhật câu hỏi thành công');
            res.redirect(baseRoute + req.params.quizId);
        }).catch(function (err) {
            logger.error(err);
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);
            res.locals.quiz = data;
            next();
        });
    };

    controller.quizDelete = function (req, res) {
        let ids = req.body.ids.split(',');
        let categoryAction = app.feature.category.actions;
        let quizAction = app.feature.quiz.actions;

        quizAction.findAll({
            where: {
                id: {
                    $in: ids
                }
            }
        }).then(function (quizzes) {
            return Promise.map(quizzes, function (quiz) {
                // Nếu không có quyền quiz_manage_all và không phải tác giả của quiz thì không được xóa
                if (req.permissions.indexOf(permissionManageAll) === -1 && quiz.created_by != req.user.id) {
                    return null;
                } else {
                    let categories = quiz.categories ? categoryAction.convertToArray(quiz.categories) : [];
                    if (categories.length > 0) {
                        return quizAction.destroy([quiz.id]).then(function () {
                            // Giảm count của danh mục
                            return categoryAction.updateCount(categories, 'quiz', 'categories');
                        });
                    } else {
                        return null;
                    }
                }
            });
        }).then(function () {
            req.flash.success('Xóa câu hỏi thành công');
            res.sendStatus(200);
        }).catch(function (err) {
            logger.error(err);
            req.flash.error('Name: ' + err.name + '<br />' + 'Message: ' + err.message);
            res.sendStatus(200);
        });
    };

    controller.quizAnswerDelete = function (req, res) {
        app.feature.quiz.actions.destroyAnswer(req.body.id).then(function () {
            req.flash.success("Xóa đáp án thành công.");
            res.sendStatus(200);
        }).catch(function (error) {
            req.flash.error('Name: ' + error.name + '<br />' + 'Message: ' + error.message);
            res.sendStatus(200);
        });
    };

    controller.quizRead = function (req, res, next, id) {
        app.feature.quiz.actions.find({
            include: [
                {
                    model: app.models.quiz_answer,
                    attributes: ['id', 'answer_text', 'status']
                }
            ],
            where: {
                id: id
            }
        }).then(function (quiz) {
            if (quiz) {
                req.quiz = quiz;
                next();
            } else {
                req.flash.error('Quiz không tồn tại');
                res.redirect(baseRoute);
            }
        }).catch(function (err) {
            req.flash.error(err.name + ': ' + err.message);
            res.redirect(baseRoute);
        });
    };

};