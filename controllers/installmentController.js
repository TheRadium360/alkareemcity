const Installment = require("../models/installmentModel");
const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');


//Todo:  ************************** helper functuions ******************************



exports.approvedInstallment=catchAsync( async ( req, res, next ) => {
  
  let installment = await Installment.findById(req.params.id);
  
  //Check if installment plan has been completed
  if(installment.installmentCount>=installment.totalInstallmentCount){
    res.status( 200 ).json( {
      status: "success",
      data: {message:"Installment plan has been completed",
            completionStatus:true         
    },
    } )    
  }

  installment.possesion=req.body.possesion;
  installment.installmentCount++;
  installment.totalAmount -= installment.total;
  installment.startDate.setMonth( installment.startDate.getMonth()+ 1);
   await Installment.findByIdAndUpdate( req.params.id, installment, {
   new: true,
   runValidators: true
} );

res.status( 200 ).json( {
    status: "success",
    data: installment,
  } )

} )


exports.createInstallment = catchAsync(async(req, res, next) => {
  req.body.installmentCount = 1;
  req.body.totalAmount = req.body.totalAmount - (req.body.ballotAmount + req.body.bookingAmount + req.body.installmentPerMonth);
  const doc = await Installment.create(req.body);
  res.status(200).json({
    status: "success",
    data: doc
  })
})

exports.getInstallment=factory.getOne( Installment ,{path:"user"});
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