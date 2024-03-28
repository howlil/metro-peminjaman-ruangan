const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/konfirmasi')
const middleware = require('../../middleware/authentication')

router.get('/allDataKonfirmasi', middleware, controllers.allDataKonfir)
router.get('/konfirmasiPinjam/:id_peminjaman', middleware, controllers.konfirmasiPinjam)
router.get('/filterKonfirmasi/:id_ruangan', middleware, controllers.filterKonfirmasi)

module.exports = router