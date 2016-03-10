'use strict';

module.exports = function (action, component, app) {

    /**
     * Find quiz by ID
     */
    action.findById = function (id) {
        return app.models.quiz.findById(id);
    };

    /**
     * Find quiz with conditions
     */
    action.find = function (conditions) {
        return app.models.quiz.find(conditions);
    };

    /**
     * Find all quizzes with conditions
     */
    action.findAll = function (conditions) {
        return app.models.quiz.findAll(conditions);
    };

    /**
     * Find and count all quizzes with conditions
     */
    action.findAndCountAll = function (conditions) {
        return app.models.quiz.findAndCountAll(conditions);
    };

    /**
     * Lấy danh sách quiz theo danh mục
     * Nếu có authorId thì chỉ lấy quiz của người sở hữu và quiz được share
     */
    action.findByCategories = function (categoryId, authorId) {
        if (authorId) {
            return app.models.quiz.findAll({
                where: {
                    categories: {
                        $like: '%' + categoryId + '%'
                    },
                    $or: [
                        {
                            created_by: authorId
                        },
                        {
                            share: true
                        }
                    ]
                }
            });
        } else {
            return app.models.quiz.findAll({
                where: {
                    categories: {
                        $like: '%' + categoryId + '%'
                    }
                }
            });
        }
    };

    /**
     * Create new quiz
     */
    action.create = function (data) {
        data.title = data.title.trim();
        return app.models.quiz.create(data);
    };

    /**
     * Update quiz
     */
    action.update = function (quiz, data) {
        data.title = data.title.trim();
        return quiz.updateAttributes(data);
    };

    /**
     * Delete quizzes by ids
     */
    action.destroy = function (ids) {
        return app.models.quiz.destroy({
            where: {
                id: {
                    $in: ids
                }
            }
        })
    };

    /**
     * Find quiz answer by ID
     */
    action.findAnswerById = function (id) {
        return app.models.quiz_answer.findById(id);
    };

    /**
     * Create new quiz answer
     */
    action.createAnswer = function (data) {
        return app.models.quiz_answer.create(data);
    };

    /**
     * Update quiz answer
     */
    action.updateAnswer = function (quiz_answer, data) {
        return quiz_answer.updateAttributes(data);
    };

    /**
     * Delete quiz answer by id
     */
    action.destroyAnswer = function (id) {
        return app.models.quiz_answer.destroy({
            where: {
                id: id
            }
        })
    };

    /**
     * Lấy danh sách quiz kèm câu trả lời theo mảng id
     */
    action.getQuizzes = function (ids) {
        let data = {};

        // Lấy toàn bộ quiz theo id
        return app.models.quiz.findAll({
            include: [
                {model: app.models.quiz_answer}
            ],
            where: {
                id: ids
            }
        }).then(function (quizzes) {
            data.quiz = [];

            // Sắp xếp lại cấu trúc dữ liệu
            if (quizzes.length) {
                quizzes.forEach(function (quiz) {
                    /**
                     * Cấu trúc dữ liệu theo dạng sau:
                     *  quiz: [
                     *      html, quiz_id, type, answers: [ ... ]
                     *  ]
                     */
                    let answers = [];
                    quiz.quiz_answers.forEach(function (quiz_answer) {
                        answers.push({
                            id: quiz_answer.id,
                            answer: quiz_answer.answer,
                            status: quiz_answer.status
                        });
                    });

                    // Truyền vào data dạng JSON
                    data.quiz.push({
                        html: quiz.question_html,
                        quiz_id: quiz.id,
                        type: quiz.type,
                        answers: answers
                    });
                });
            }

            return data;
        });
    }

};