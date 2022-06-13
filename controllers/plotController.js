const Plot = require("../models/plotModel");
const catchAsync = require("../utils/catchAysnc");
const AppError = require("../utils/appError");
const factory = require('./FactoryHandler');



exports.getPlotOfUser=catchAsync(async (req,res,next)=>{
  const id=req.params.id;
  let doc = await Plot.find( {user: id} );
  if ( !doc ) {
    return next( new AppError( `Could not find a plot with this user ID: ${req.params.id}`, 404 ) );
  }
  res.status( 200 ).json( {
      status: 'success',
      data: doc
  } );
})

// Optimize: get all 
exports.getAllPlots = factory.getAll(Plot);

// Optimize: get single data basaed on id
exports.getPlot=factory.getOne( Plot);

// Optimize: Create  
exports.createPlot=factory.createOne( Plot );

//Optimize: Update 
exports.updatePlot=factory.updateOne( Plot )

// Optimize: delete  based on id 
exports.deletePlot = factory.deleteOne(Plot);