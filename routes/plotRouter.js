const express = require("express");
const { protect, restrictTo }=require( "../controllers/authController" );
const plotController = require("../controllers/plotController");

const router=express.Router();


router.get( '/:id', plotController.getPlot );
router.get( '/', plotController.getAllPlots );
router.post( '/', protect, restrictTo( 'admin' ), plotController.createPlot );
router.delete( '/:id', plotController.deletePlot );


module.exports = router;
// module.exports=