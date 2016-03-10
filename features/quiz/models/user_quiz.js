"use strict";
module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user_quiz", {
        id:{
            type:DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: DataTypes.BIGINT,
        quiz_id: DataTypes.BIGINT,
        answers: DataTypes.ARRAY(DataTypes.INTEGER),
        status: DataTypes.BOOLEAN, // correct: TRUE or incorrect: FALSE
        created_at: DataTypes.DATE
    }, {
        tableName: 'user_quiz',
        createdAt: 'created_at',
        updatedAt: false,
        deletedAt: false
    });
};