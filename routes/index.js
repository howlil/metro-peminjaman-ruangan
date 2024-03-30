const admin = require('./admin/admin')
const dashboard = require('./admin/dashboard')
const ajuanPeminjaman = require('./admin/ajuanPeminjaman')
const konfrimasi = require('./admin/konfirmasi')
const ruangan = require('./admin/ruangan')
const caraPeminjaman = require('./admin/caraPeminjaman')
const riwayat = require('./admin/riwayat')
const server = {}

server.admin = admin
server.dashboard = dashboard
server.ajuanPeminjaman = ajuanPeminjaman
server.konfrimasi = konfrimasi
server.ruangan = ruangan
server.caraPeminjaman = caraPeminjaman
server.riwayat = riwayat

module.exports = server