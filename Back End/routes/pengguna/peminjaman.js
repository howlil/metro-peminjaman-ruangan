const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/pengguna/peminjaman')

router.get('/jadwalKosong', controllers.tampilDataJadwal)
router.get('/detailJadwalKosong/:tanggal_peminjaman', controllers.tampilDetailJadwal)
router.post('/tambahPeminjaman/:id_ruangan', controllers.uploadd, controllers.tambahPeminjaman)

module.exports = router