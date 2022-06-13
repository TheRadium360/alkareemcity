const express = require("express");
const { protect, restrictTo }=require( "../controllers/authController" );
const plotController = require("../controllers/plotController");

const router=express.Router();


router.route("/userid/:id").get(plotController.getPlotOfUser);
router.get( '/:id',protect, plotController.getPlot );
router.get( '/',protect, plotController.getAllPlots );
router.post( '/', protect, restrictTo( 'admin' ), plotController.createPlot );
router.patch( '/:id', protect, restrictTo( 'admin' ), plotController.updatePlot );
router.delete( '/:id', protect,plotController.deletePlot );


module.exports = router;
// module.exports=