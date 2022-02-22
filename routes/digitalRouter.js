const express=require( "express" );
const {uploadDigitalImages,resizeDigitalImage,createDigitalPage}=require("../controllers/digitalController");





const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.route( "/" )
  .post(uploadDigitalImages,resizeDigitalImage,createDigitalPage);
  // .delete( deleteData )
  // .patch( updateData )



module.exports=Router;