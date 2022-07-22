const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/').put(updateGoal).delete(deleteGoal)

module.exports = router