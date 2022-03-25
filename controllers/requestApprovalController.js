const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');
const RequestApproval = require("../models/requestApprovalModel");
const multer = require('multer');
const sharp = require('sharp');


//Todo:  ************************** helper functuions ******************************

// *************** Image uploading and processing
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};
const upload=multer( {
    storage: multerStorage,
    fileFilter: multerFilter
} );

exports.uploadTransactionImage = upload.single('transactionImage');




exports.resizeTransactionImage = catchAsync(async(req, res, next) => {
    if (!req.file)
        return next(new AppError("Please select image for transaction!", 400));
    const filename = `transaction-reciept-${Date.now()+1}.jpeg`
    await sharp(req.file.buffer)
        // .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 50 })
        .toFile(`img/transactions/${filename}`);
    req.body.transactionImage = filename;

    next();

})





exports.createRequestApproval = factory.createOne(RequestApproval)







exports.updateApprovalRequest = catchAsync(async(req, res, next) => {
    const installment = req.installment;
    console.log(req.installment);
    // const { user, plotNumber } = req.body;

    const updatedResult=await RequestApproval.findOneAndUpdate( { user: installment.user, installment: installment._id, status: false }, { status: true } );

    if ( !updatedResult ) return next( new AppError( "Request may have already been approved! or Try again later! " ) )

    res.status(200).json({
        status: "success",
        data: updatedResult
    })

})




// Optimize: get all
exports.getAllRequestApproval=factory.getAll( RequestApproval, { path: 'user plot installment' }, { status: false } );
exports.deleteRequestApproval=factory.deleteOne( RequestApproval );

// Optimize: get single data basaed on id
exports.getSingleRequestApproval=factory.getOne( RequestApproval );

// Optimize: Create
//exports.createData=factory.createOne( Model );

// Optimize: update based on id
//exports.updateData=factory.updateOne( Model )

// Optimize: delete  based on id
//exports.deleteData=factory.deleteOne( Model );