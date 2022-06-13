const express=require( "express" );
const { protect } = require("../controllers/authController");
const { createInstallment, approvedInstallment, getInstallment, deleteInstallment, getInstallmentOfUser }=require( "../controllers/installmentController" );


const Router=express.Router();

//Optimize:   ************** Routes ***************

Router.use(protect);
Router.post( '/',createInstallment);

Router.route("/userid/:id").get(getInstallmentOfUser);

Router.route( "/:id" )
  .get( getInstallment )
  .patch( approvedInstallment )
  .delete( deleteInstallment )



module.exports=Router;