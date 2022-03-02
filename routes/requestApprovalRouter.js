const express=require( "express" );






const Router=express.Router();

//Optimize:   ************** Routes ***************


Router.get( '/', greet );




Router.route( "/:id" )
// .get( getData )
// .delete( deleteData )
// .patch( updateData )



module.exports=Router;