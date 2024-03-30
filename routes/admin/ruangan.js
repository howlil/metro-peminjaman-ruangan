const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/ruangan')
const middleware = require('../../middleware/authentication')

router.get('/tampilRuangan', middleware, controllers.tampilRuangan)
router.post('/tambahRuangan', middleware, controllers.uploadd, controllers.tambahRuangan)
router.post('/editRuangan/:id_ruangan', middleware, controllers.uploadd, controllers.editRuangan)
router.delete('/hapusRuangan/:id_ruangan', middleware, controllers.hapusRuangan)
router.get('/detailRuangan/:id_ruangan', middleware, controllers.detailRuangan)

module.exports = router