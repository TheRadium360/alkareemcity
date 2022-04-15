const express=require( "express" );
const { createInstallment, approvedInstallment, getInstallment, deleteInstallment }=require( "../controllers/installmentController" );


const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.post( '/',createInstallment);

Router.route( "/:id" )
  .get( getInstallment )
  .patch( approvedInstallment )
  .delete( deleteInstallment )



module.exports=Router;