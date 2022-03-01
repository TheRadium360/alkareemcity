const express=require( "express" );
const { createInstallment } = require("../controllers/installmentController");


const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.post( '/',createInstallment);




Router.route( "/:id" )
  // .get( getData )
  // .delete( deleteData )
  // .patch( updateData )



module.exports=Router;