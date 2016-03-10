'use strict';

module.exports = function (component, application) {

    let controller = component.controllers.backend;
    let quizPermissions = ['quiz_manage', 'quiz_manage_all'];
    let categoryPermission = ['quiz_category_manage'];

    return {
        // Quiz
        "/quiz": {
            get: {
                handler: controller.quizList,
                authenticate: true,
                permissions: quizPermissions
            },
            delete: {
                handler: controller.quizDelete,
                authenticate: true,
                permissions: quizPermissions
            },
            param: {
                key: "quizId",
                handler: controller.quizRead
            }
        },
        "/quiz/page/:page": {
            get: {
                handler: controller.quizList,
                authenticate: true,
                permissions: quizPermissions
            }
        },
        "/quiz/page/:page/sort/:sort/(:order)?": {
            get: {
                handler: controller.quizList,
                authenticate: true,
                permissions: quizPermissions
            }
        },
        "/quiz/create": {
            get: {
                handler: controller.quizCreate,
                authenticate: true,
                permissions: quizPermissions
            },
            post: {
                handler: [controller.quizSave, controller.quizCreate],
                authenticate: true,
                permissions: quizPermissions
            }
        },
        "/quiz/:quizId([0-9]+)": {
            get: {
                handler: controller.quizView,
                authenticate: true,
                permissions: quizPermissions
            },
            post: {
                handler: [controller.quizUpdate, controller.quizView],
                authenticate: true,
                permissions: quizPermissions
            }
        },
        "/quiz/quiz-answer/": {
            delete: {
                handler: controller.quizAnswerDelete,
                authenticate: true,
                permissions: quizPermissions
            }
        },
        // Quiz category
        "/quiz/categories": {
            get: {
                handler: controller.categoryList,
                authenticate: true,
                permissions: categoryPermission
            },
            delete: {
                handler: controller.categoryDelete,
                authenticate: true,
                permissions: categoryPermission
            }
        },
        "/quiz/categories/page/:page": {
            get: {
                handler: controller.categoryList,
                authenticate: true,
                permissions: categoryPermission
            }
        },
        "/quiz/categories/page/:page/sort/:sort/(:order)?": {
            get: {
                handler: controller.categoryList,
                authenticate: true,
                permissions: categoryPermission
            }
        },
        "/quiz/categories/quick-create": {
            post: {
                handler: controller.categoryQuickCreate,
                authenticate: true,
                permissions: categoryPermission
            }
        },
        "/quiz/categories/create": {
            get: {
                handler: controller.categoryCreate,
                authenticate: true,
                permissions: categoryPermission
            },
            post: {
                handler: [controller.categorySave, controller.categoryCreate],
                authenticate: true,
                permissions: categoryPermission
            }
        },
        "/quiz/categories/:categoryId([0-9]+)": {
            get: {
                handler: controller.categoryView,
                authenticate: true,
                permissions: categoryPermission
            },
            post: {
                handler: [controller.categoryUpdate, controller.categoryView],
                authenticate: true,
                permissions: categoryPermission
            }
        }
    }

};