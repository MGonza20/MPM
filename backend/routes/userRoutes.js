/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, updateUser, deleteUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

// El resto del CRUD 
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router