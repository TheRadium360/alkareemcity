const Plot = require("../models/plotModel");
const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');




// Optimize: get all 
exports.getAllPlots = factory.getAll(Plot);

// Optimize: get single data basaed on id
exports.getPlot=factory.getOne( Plot, { path: "plotInformation" } );

// Optimize: Create  
exports.createPlot=factory.createOne( Plot );

//Optimize: Update 
exports.updatePlot=factory.updateOne( Plot )

// Optimize: delete  based on id 
exports.deletePlot = factory.deleteOne(Plot);