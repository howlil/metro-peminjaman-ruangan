const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')
const peminjaman = require('./peminjaman')

const ruangan = Sequelize.define('ruangan', {
    id_ruangan:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    nama_ruangan:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    deskripsi:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gedung:{
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
    tableName: 'ruangan',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

ruangan.hasMany(peminjaman, {foreignKey: 'id_ruangan', as: 'dataPeminjaman'})
peminjaman.belongsTo(ruangan, {foreignKey: 'id_ruangan', as: 'dataRuangan'})

module.exports = ruangan