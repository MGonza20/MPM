const express = require('express')
const router = express.Router()
const {
  getVets,
  getAllVets,
  setVetinfo,
  updateVetinfo,
  deleteVetinfo,
} = require('../controllers/vetController')

router.get('/', getVets)
router.post('/', setVetinfo)
router.put('/:id', updateVetinfo)
router.delete('/:id', deleteVetinfo)

router.get('/get_all_vets', getAllVets)

module.exports = router
