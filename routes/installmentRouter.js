const express=require( "express" );
const { createInstallment ,approvedInstallment,getInstallment} = require("../controllers/installmentController");


const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.post( '/',createInstallment);


Router.route( "/:id" )
  .get( getInstallment )
  .patch( approvedInstallment );



module.exports=Router;