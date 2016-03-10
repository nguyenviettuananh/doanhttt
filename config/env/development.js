'use strict';

module.exports = {
    /**
     * Uncomment to override config in development environment
     */
    port: process.env.PORT || 1506,
    db: {
        host: 'localhost',
        port: '5432',
        database: 'quiz_doanhttt',
        username: 'postgres',
        password: '',
        dialect: 'postgres',
        logging: false
    },
    redis: {
        host: 'localhost',
        port: '6379'
    }
};
