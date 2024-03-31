const express = require('express')
const router = express.Router()
const controller = require('../../controllers/admin/admin')
const middleware = require('../../middleware/authentication')

router.post('/tambahAdmin', controller.tambahAdmin)
router.post('/loginAdmin', controller.loginAdmin)
router.delete('/logoutAdmin', middleware, controller.logoutAdmin)

module.exports = router