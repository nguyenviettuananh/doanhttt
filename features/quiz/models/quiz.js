'use strict';

module.exports = function (sequelize, DataTypes) {

    return sequelize.define('quiz', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        question_markdown: DataTypes.STRING,
        question_html: DataTypes.STRING,
        type: DataTypes.INTEGER,
        categories: DataTypes.TEXT,
        share: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        created_by: DataTypes.INTEGER,
        modified_at: DataTypes.DATE,
        modified_by: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        deletedAt: false
    });

};