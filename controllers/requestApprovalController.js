
// const User=require( "../models/userModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );
const RequestApproval=require( "../models/requestApprovalModel" );


//Todo:  ************************** helper functuions ******************************






exports.updateApprovalRequest=catchAsync( async ( req, res, next ) => {
  const installment=req.params.id;

  const { user, plotNo }=req.body;

  const updatedResult=await RequestApproval.findOneAndUpdate( { user, installment, plotNo, status: false }, { status: true } );

  // if ( !updatedResult ) return next( new AppError( "Request may have already been approved! or Try again later! " ) )

  res.status( 200 ).json( {
    status: "success",
    data: updatedResult
  } )

} )




// Optimize: get all
exports.getAllRequestApproval=factory.getAll( RequestApproval );

// Optimize: get single data basaed on id
//exports.getSingleData=factory.getOne( Model );

// Optimize: Create
//exports.createData=factory.createOne( Model );

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id
//exports.deleteData=factory.deleteOne( Model );