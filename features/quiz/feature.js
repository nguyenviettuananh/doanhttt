'use strict';

module.exports = {
    title: 'Quiz',
    author: 'Techmaster',
    version: '0.1.0',
    description: 'Quiz manager system',
    permissions: [
        {
            name: 'quiz_category_manage',
            title: 'Danh mục quiz'
        },
        {
            name: 'quiz_manage',
            title: 'Quiz của tôi'
        },
        {
            name: 'quiz_manage_all',
            title: 'Tất cả quiz'
        }
    ],
    backend_menu: {
        title: 'Quiz',
        icon: 'fa fa-question-circle',
        menus: [
            {
                permission: ['quiz_manage', 'quiz_manage_all'],
                title: 'Danh sách',
                link: '/'
            },
            {
                permission: 'quiz_category_manage',
                title: 'Danh mục',
                link: '/categories'
            }
        ]
    }
};

