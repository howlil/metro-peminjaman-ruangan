const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')

const detail_gambar_ruangan = Sequelize.define('detail_gambar_ruangan', {
    id_detail_gambar:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    id_ruangan:{
        type: DataTypes.UUID,
        allowNull: false
    },
    file_gambar:{
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
    tableName: 'detail_gambar_ruangan',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = detail_gambar_ruangan