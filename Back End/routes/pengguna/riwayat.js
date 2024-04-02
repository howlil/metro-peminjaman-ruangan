const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/pengguna/riwayat')

router.get('/riwayatPeminjaman', controllers.tampilPeminjaman)

module.exports = router