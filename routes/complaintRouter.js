const express=require( "express" );
const { protect, restrictTo }=require( "../controllers/authController" );
const { getAllCompalints, createComplaint, getSingleComplaint, deleteAll, retrieveAll, deleteComplaint }=require( "../controllers/complaintController" );



const Router=express.Router();

//Optimize:   ************** Routes ***************

Router.route( '/' )
  .get( protect, restrictTo( 'admin' ), getAllCompalints )
  // .post( protect, restrictTo( 'user' ), createComplaint )
  .post( createComplaint )

Router.delete( '/deleteall', protect, restrictTo( 'admin' ), deleteAll )
Router.patch( '/retrieveall', protect, restrictTo( 'admin' ), retrieveAll )

Router.route( '/:id' )
  .get( protect, restrictTo( 'admin' ), getSingleComplaint )
  .delete( protect, restrictTo( 'admin' ), deleteComplaint )


// .get( getData )
// .patch( updateData )



module.exports=Router;