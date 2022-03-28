const mongoose = require('mongoose');
const validator = require("validator");




//Optimize:  ************************** plot Modal Schema ******************************
const plotSchema = new mongoose.Schema({
    plotNo: {
        type: String,
        required: [true, "Please fill the plot number"],
        trim: true
    },
    plotType: {
        type: String,
        required: [true, "Please type of plot"],
        enum: ["Residential", "Commercial"]
    },
    plotPrice: {
        type: Number,
        required: [true, "PLease fill price of plot"]
    },
    block: {
        type: String,
        required: [true, "Please fill the block"],
        trim: true
    },
    plotArea: {
        type: String,
        required: [true, "Please provide area of the plot"]

    },
    cords:[{
    lat: {
        type: Number,
        required: [true, "Please fill the latitude of plot"],
    },

    lng: {
        type: Number,
        required: [true, "Please fill the langitude of plot"],

    }
}],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [ true, "Please join a user ID" ]
    }


}, {
    // TO SEE VIRTUAL FIELDS 
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },

});



const Plot = mongoose.model('Plot', plotSchema);


module.exports = Plot;