const { Router } = require('express');
const { getMeal, saveMeals, deleteMeals, editMeal } = require('./MealController')

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals)
router.delete('/deleteMeals', deleteMeals)
router.put('/editMeal', editMeal)

module.exports = router;