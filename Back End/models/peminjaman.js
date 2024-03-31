const {DataTypes} = require('sequelize')
const Sequelize = require('../config/db')

const peminjaman = Sequelize.define('peminjaman', {
    id_peminjaman:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    id_ruangan:{
        type: DataTypes.UUID,
        allowNull: false
    },
    nama_peminjam:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    jabatan:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    nama_kegiatan:{
        type: DataTypes.STRING,
        allowNull: false
    },
    kontak:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    tanggal_peminjaman:{
        type: DataTypes.DATE,
        allowNull: false
    },
    jam_mulai_peminjaman:{
        type: DataTypes.TIME,
        allowNull: false
    },
    jam_selesai_peminjaman:{
        type: DataTypes.TIME,
        allowNull: false
    },
    file_peminjaman:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull:false
    }
}, {
    tableName: 'peminjaman',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = peminjaman