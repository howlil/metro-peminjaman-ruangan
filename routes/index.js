const admin = require('./admin/admin')
const dashboard = require('./admin/dashboard')
const ajuanPeminjaman = require('./admin/ajuanPeminjaman')
const konfrimasi = require('./admin/konfirmasi')
const ruangan = require('./admin/ruangan')
const server = {}

server.admin = admin
server.dashboard = dashboard
server.ajuanPeminjaman = ajuanPeminjaman
server.konfrimasi = konfrimasi
server.ruangan = ruangan

module.exports = server