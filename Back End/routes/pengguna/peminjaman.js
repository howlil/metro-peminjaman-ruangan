const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/pengguna/peminjaman')

router.get('/jadwalKosong', controllers.tampilDataJadwal)

module.exports = router