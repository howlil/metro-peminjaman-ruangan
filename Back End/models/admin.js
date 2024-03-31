const{DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const admin = sequelize.define('admin', {
    id_admin:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'admin',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}) 

module.exports = admin