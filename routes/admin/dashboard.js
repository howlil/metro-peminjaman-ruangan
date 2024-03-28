const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/dashboard')
const middleware = require('../../middleware/authentication')

router.get('/dataRuangan', middleware, controllers.dataRuangan)
router.get('/dataJadwal/:id_ruangan', middleware, controllers.jadwalRuangan)

module.exports = router