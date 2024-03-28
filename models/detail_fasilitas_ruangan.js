const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')

const detail_fasilitas_ruangan = Sequelize.define('detail_fasilitas_ruangan', {
    id_detail_fasilitas:{
        primaryKey: true, 
        allowNull: false, 
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    id_ruangan:{
        type: DataTypes.UUID,
        allowNull: false
    },
    nama_fasilitas:{
        type: DataTypes.STRING(100),
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
    tableName: 'detail_fasilitas_ruangan',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = detail_fasilitas_ruangan