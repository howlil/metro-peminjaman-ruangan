const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/ajuanPeminjaman')
const middleware = require('../../middleware/authentication')

router.get('/allDataPeminjaman', middleware, controllers.allDataPeminjaman)
router.get('/setujuPinjam/:id_peminjaman', middleware, controllers.setujuPinjam)
router.get('/tolakPinjam/:id_peminjaman', middleware, controllers.tolakPinjam)
router.get('/filterPeminjaman/:id_ruangan', middleware, controllers.filterPeminjaman)

module.exports = router