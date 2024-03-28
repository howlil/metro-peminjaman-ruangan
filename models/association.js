const admin = require('./admin')
const token = require('./token')
const detail_gambar_ruangan = require('./detail_gambar_ruangan')
const detail_fasilitas_ruangan = require('./detail_fasilitas_ruangan')
const ruangan = require('./ruangan')
const peminjaman= require('./peminjaman')

ruangan.hasMany(detail_fasilitas_ruangan, {foreignKey: 'id_ruangan'})
detail_fasilitas_ruangan.belongsTo(ruangan, {foreignKey: 'id_ruangan'})

ruangan.hasMany(detail_gambar_ruangan, {foreignKey: 'id_ruangan'})
detail_gambar_ruangan.belongsTo(ruangan, {foreignKey:'id_ruangan'})

admin.hasMany(token, {foreignKey: 'id_admin'})
token.belongsTo(admin, {foreignKey: 'id_admin'})