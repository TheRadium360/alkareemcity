const express=require( "express" );
const { protect, restrictTo }=require( "../controllers/authController" );
const { createInstallment } = require("../controllers/installmentController");
const { createUser }=require( "../controllers/userController" );


const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.post( '/',createInstallment);
Router.post( '/bookinstallment', protect, restrictTo( 'admin' ), createUser, createInstallment );




Router.route( "/:id" )
  // .get( getData )
  // .delete( deleteData )
  // .patch( updateData )



module.exports=Router;