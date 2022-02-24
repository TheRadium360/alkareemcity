const multer = require('multer');
const sharp = require('sharp');
const Digital=require( "../models/digitalModel" );
const catchAsync=require( "../utils/catchAysnc" );
const AppError=require( "../utils/appError" );
const factory=require( './FactoryHandler' );


//Todo:  ************************** helper functuions ******************************

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

// exports.uploadDigitalImages = upload.fields([
//   { name: 'image', maxCount: 1 }
// ]);

exports.uploadDigitalImages=upload.single( "image" );


exports.resizeDigitalImage=catchAsync( async ( req, res, next ) => {
  if ( !req.file ) return next();

  // 1) Icon image
  req.body.image = `dp-${Date.now()}-icon.jpeg`;
  
  await sharp(req.file.buffer)
    // .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`img/Digital_Pages/${req.body.image}`);


  next();
});







// Optimize: get all 
exports.getAllDigitalPage=factory.getAll( Digital );

// Optimize: get single data basaed on id
exports.getDigitalPage=factory.getOne( Digital );

// Optimize: Create  
exports.createDigitalPage=factory.createOne( Digital );

// Optimize: update based on id 
exports.updateDigitalPage=factory.updateOne( Digital )

// Optimize: delete  based on id 
exports.deleteDigitalPage=factory.deleteOne( Digital );