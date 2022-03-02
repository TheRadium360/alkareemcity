
// const User=require( "../models/userModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );


//Todo:  ************************** helper functuions ******************************






exports.greet=catchAsync( async ( req, res, next ) => {

  //? (2) Send the delete response with 204 code
  res.status( 200 ).json( {
    status: "success",
    data: "Hello World!"
  } )

} )




// Optimize: get all
//exports.getAllData=factory.getAll( Model );

// Optimize: get single data basaed on id
//exports.getSingleData=factory.getOne( Model );

// Optimize: Create
//exports.createData=factory.createOne( Model );

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id
//exports.deleteData=factory.deleteOne( Model );