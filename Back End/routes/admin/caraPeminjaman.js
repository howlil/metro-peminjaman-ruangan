const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/caraPeminjaman')
const middleware = require('../../middleware/authentication')

router.post('/tambahCaraPinjam/:id_file', middleware, controllers.uploadd, controllers.tambahPeminjaman)
router.get('/detailCaraPinjam', middleware, controllers.uploadd, controllers.detailCaraPinjam)

module.exports = router