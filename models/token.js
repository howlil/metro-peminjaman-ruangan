const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')

const token = Sequelize.define('token', {
    id_token:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    id_admin:{
        type: DataTypes.UUID,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    expires_at:{
        type: DataTypes.DATE,
        defaultValue: () => new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))
    }
}, {
    tableName: 'token',
    timestamps: false,
    createdAt: 'created_at'
})

module.exports = token