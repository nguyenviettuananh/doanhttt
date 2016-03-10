'use strict';

module.exports = function (sequelize, DataTypes) {

    return sequelize.define("quiz_answer", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        quiz_id: DataTypes.BIGINT,
        answer_text: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        created_by: DataTypes.BIGINT,
        modified_at: DataTypes.DATE,
        modified_by: DataTypes.BIGINT
    }, {
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'modified_at'
    });

};