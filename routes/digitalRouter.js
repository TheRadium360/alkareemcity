const express=require( "express" );
const { uploadDigitalImages, resizeDigitalImage, createDigitalPage, getDigitalPage, updateDigitalPage, getAllDigitalPage, deleteDigitalPage }=require( "../controllers/digitalController" );





const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.route( "/" )
  .post( uploadDigitalImages, resizeDigitalImage, createDigitalPage ).get( getAllDigitalPage );

Router.route( "/:id" ).get( getDigitalPage ).patch( uploadDigitalImages, resizeDigitalImage, updateDigitalPage ).delete( deleteDigitalPage );


module.exports=Router;