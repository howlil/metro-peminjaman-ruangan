const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')
const peminjaman = require('./peminjaman')
const detail_fasilitas_ruangan = require('./detail_fasilitas_ruangan')
const detail_gambar_ruangan = require('./detail_gambar_ruangan')

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
    kapasitas: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    penanggung_jawab:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lantai:{
        type: DataTypes.STRING(50),
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

ruangan.hasMany(detail_fasilitas_ruangan, {foreignKey: 'id_ruangan', as:'dataFasilitas'})
detail_fasilitas_ruangan.belongsTo(ruangan, {foreignKey: 'id_ruangan', as: 'dataRuangan'})

ruangan.hasMany(detail_gambar_ruangan, {foreignKey: 'id_ruangan', as: 'dataGambar'})
detail_gambar_ruangan.belongsTo(ruangan, {foreignKey:'id_ruangan', as: 'dataRuangan'})

module.exports = ruangan