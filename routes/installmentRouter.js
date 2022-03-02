const express=require( "express" );
const { createInstallment ,approvedInstallment} = require("../controllers/installmentController");


const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.post( '/',createInstallment);


Router.route( "/:id" )
  .patch( approvedInstallment);



module.exports=Router;