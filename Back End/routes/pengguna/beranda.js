const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/pengguna/beranda')

router.get('/dataRuanganUser', controllers.tampilDataRuangan)
router.get('/cekJadwal', controllers.cekJadwal)
router.get('/detailRuanganUser/:id_ruangan', controllers.detailRuangan)
router.get('/dataCaraPeminjaman', controllers.caraPeminjaman)

module.exports = router