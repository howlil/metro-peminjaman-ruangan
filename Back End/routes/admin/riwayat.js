const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/riwayat')
const middleware = require('../../middleware/authentication')

router.get('/tampilDataPinjam', middleware, controllers.tampilDataPinjam)
router.get('/filterDataRiwayat/:id_ruangan', middleware, controllers.filterData)

module.exports = router