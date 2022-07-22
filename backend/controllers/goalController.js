// @desc    Get goals
// @route   GET /api/goals
// @acccess Private

const getGoals = (req,res) => {
    res.status(200).json({message: "Get Goals"})
}

// @desc    Set goals
// @route   POST /api/goals
// @acccess Private

const setGoals = (req,res) => {
    res.status(200).json({message: 'Set Goals'})
}

// @desc    Update goals
// @route   PUT /api/goals
// @acccess Private

const updateGoals = (req,res) => {
    res.status(200).json({message: 'Update Goal ${req.params.id}'})
}

// @desc    Delete goals
// @route   DELETE /api/goals
// @acccess Private

const deleteGoals = (req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}