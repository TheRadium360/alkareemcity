const express = require("express");
const router = express.Router();
const plotController = require("../controllers/plotController");



router.get('/:id', plotController.getPlot)
router.get('/', plotController.getAllPlots)
router.post('/', plotController.createPlot)
router.delete('/:id', plotController.deletePlot)


module.exports = router;