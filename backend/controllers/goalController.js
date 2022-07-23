const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
// @acccess Private

const getGoals = asyncHandler (async (req,res) => { 
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals)
})

// @desc    Set goals
// @route   POST /api/goals
// @acccess Private

const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goals = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    });

    res.status(200).json(goals)
});

// @desc    Update goals
// @route   PUT /api/goals
// @acccess Private

const updateGoals = asyncHandler (async (req,res) => {
    const goals = await Goal.findById(req.params.id)
    if(!goals) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true})
    
    res.status(200).json(updatedGoals)
})

// @desc    Delete goals
// @route   DELETE /api/goals
// @acccess Private

const deleteGoals = asyncHandler (async (req,res) => {
    const goals = await Goal.findById(req.params.id)
    if(!goals) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goals.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}