const AppError = require("../utils/appError");
const catchAsync = require('./../utils/catchAysnc')
const factory = require('./../controllers/FactoryHandler')
const multer = require("multer");
const sharp = require("sharp");
const Flex = require('./../models/flexModel');

// *************** Image uploading and processing
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

exports.uploadFlexImage = upload.fields([{
    name: "images",
    maxCount: 20,
}]);




exports.resizeFlexImage = catchAsync(async(req, res, next) => {
    if (!req.files)
        return next(new AppError("Please select image for flex!", 400));

    const arr = req.files.images.map(async(file, i) => {
        const filename = `flex-${Date.now()}-${i + 1}.jpeg`;

        await sharp(file.buffer)
            // .resize(2000, 1333)
            .toFormat('jpeg')
            .jpeg({ quality: 50 })
            .toFile(`img/flexes/${filename}`);
        return filename;


    });
    req.body.images = await Promise.all(arr)
    next();
})


exports.createFlex = factory.createOne(Flex);


exports.deleteFlex = factory.deleteOne(Flex);

exports.deleteAllFlexes = async(req, res, next) => {
    await Flex.deleteMany();
    res.status(200).json({
        status: "deleted"
    })
}