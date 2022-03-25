const Installment = require("../models/installmentModel");
const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');


//Todo:  ************************** helper functuions ******************************



exports.approvedInstallment=catchAsync( async ( req, res, next ) => {
  
  let installment = await Installment.findById(req.params.id);
  
  if(installment.installmentCount===installment.totalInstallmentCount){
  return  res.status( 200 ).json( {
      status: "success",
      data: {
        message:"Installment plan completed",
        completionStatus:true         
      },
    } )
  }
  
  installment.installmentCount++;
  installment.ballotPaid=req.body.ballotPaid;
  installment.possesion=req.body.possesion;
  //Check if he clears his remaining  dues
  if(installment.installmentCount===installment.totalInstallmentCount ){
    if(!installment.possesion || !installment.ballotPaid){
      return res.status( 200 ).json( {
        status: "pending",
        data: {
              message:`Please pay remaining dues ${!installment.possesion?',Posession amount':''} ${!installment.ballotPaid?',Ballot amount':''}.`,
              completionStatus:false         
              },
      } )  
    }
   
  } 

 
  installment.remainingBalance -= installment.total;
  installment.startDate.setMonth( installment.startDate.getMonth()+ 1);
   await Installment.findByIdAndUpdate( req.params.id, installment, {
   new: true,
   runValidators: true
} );

  req.installment=installment;
  next();

  // res.status(200).json({
  //   status: "success",
  //   data: installment
  // })

} )


exports.createInstallment = catchAsync(async(req, res, next) => {
  req.body.installmentCount = 1;
  req.body.remainingBalance = req.body.totalAmount - ( req.body.bookingAmount + req.body.installmentPerMonth);
  const doc = await Installment.create(req.body);
  res.status(200).json({
    status: "success",
    data: doc
  })
})

exports.getInstallment=factory.getOne( Installment, { path: "user plot" } );
// exports.getInstallment=factory.getOne( );

// Optimize: get all 
//exports.getAllData=factory.getAll( Model );

// Optimize: get single data basaed on id

// Optimize: Create  

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id

// Optimize: update based on id 
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id 
//exports.deleteData=factory.deleteOne( Model );