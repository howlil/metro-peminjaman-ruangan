const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')

const file_format_pengajuan = Sequelize.define('file_format_pengajuan', {
    id_file:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    file_pengajuan:{
        type:DataTypes.STRING(256),
        allowNull: false
    },
    link_tutorial:{
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
    tableName: 'file_format_pengajuan',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = file_format_pengajuan