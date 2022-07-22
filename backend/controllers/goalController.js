// @desc    Get goals
// @route   GET /api/goals
// @acccess Private

const getGoals = asyncHandler (async (req,res) => {
   
    
    res.status(200).json({message: "Get Goals"})
})

// @desc    Set goals
// @route   POST /api/goals
// @acccess Private

const setGoals = asyncHandler (async  (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set Goals'})
})

// @desc    Update goals
// @route   PUT /api/goals
// @acccess Private

const updateGoals = asyncHandler (async (req,res) => {
    res.status(200).json({message: 'Update Goal ${req.params.id}'})
})

// @desc    Delete goals
// @route   DELETE /api/goals
// @acccess Private

const deleteGoals = asyncHandler (async (req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}