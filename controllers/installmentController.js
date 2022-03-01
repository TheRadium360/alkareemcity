const Installment = require("../models/installmentModel");
const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');


//Todo:  ************************** helper functuions ******************************





exports.createInstallment = catchAsync(async(req, res, next) => {
    req.body.installmentCount = 1;
    req.body.totalAmount = req.body.totalAmount - (req.body.ballotAmount + req.body.bookingAmount + req.body.installmentPerMonth);
    const doc = await Installment.create(req.body);
    res.status(200).json({
        status: "success",
        data: doc
    })
})

// exports.greet=catchAsync( async ( req, res, next ) => {

//   //? (2) Send the delete response with 204 code
//   res.status( 200 ).json( {
//     status: "success",
//     data: "Hello World!"
//   } )

// } )




// Optimize: get all 
//exports.getAllData=factory.getAll( Model );

// Optimize: get single data basaed on id
//exports.getSingleData=factory.getOne( Model );

// Optimize: Create  

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id

// Optimize: update based on id 
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id 
//exports.deleteData=factory.deleteOne( Model );