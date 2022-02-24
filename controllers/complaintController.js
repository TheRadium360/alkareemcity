
// const User=require( "../models/userModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );
const Complaint=require( "../models/complaintModel" );


//Todo:  ************************** helper functuions ******************************


exports.deleteAll=catchAsync( async ( req, res, next ) => {

  await Complaint.updateMany( {}, { $set: { active: false } } );
  res.status( 204 ).json( {
    status: "success",
    message: "All Complaints have been deleted temporary"
  } )

} )
exports.retrieveAll=catchAsync( async ( req, res, next ) => {

  await Complaint.updateMany( {}, { $set: { active: true } } );


  res.status( 200 ).json( {
    status: "success",
    message: "All Complaints have been retrived!"
  } )

} )




// Optimize: get all 
exports.getAllCompalints=factory.getAll( Complaint );

// Optimize: get single data basaed on id
exports.getSingleComplaint=factory.getOne( Complaint );

// Optimize: Create
exports.createComplaint=factory.createOne( Complaint );

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model );

// Optimize: delete  based on id
exports.deleteComplaint=catchAsync( async ( req, res, next ) => {
  // console.log( req.param.id )
  await Complaint.findByIdAndUpdate( req.params.id, { active: false } );

  res.status( 204 ).json( {
    status: "success",
    message: "Complaint has been deleted!"
  } )

} )