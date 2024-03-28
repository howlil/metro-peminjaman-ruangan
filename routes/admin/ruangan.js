const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/ruangan')
const middleware = require('../../middleware/authentication')

router.get('/tampilRuangan', middleware, controllers.tampilRuangan)

module.exports = router