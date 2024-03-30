const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/pengguna/jadwal')

router.get('/tampilJadwal', controllers.tampilJadwal)
router.get('/detailJadwal/:id_peminjaman', controllers.detailJadwal)

module.exports = router