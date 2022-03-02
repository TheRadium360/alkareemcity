const mongoose = require('mongoose');
const validator = require("validator"); // 3rd part validation package
// const slugify=require( "slugify" );
// const bcrypt=require( 'bcryptjs' );
// const crypto=require( 'crypto' );



//Optimize:  **************************  Modal installmentSchema ******************************
const installmentSchema=new mongoose.Schema( {
  plan: {
    type: String,
    required: [ true, "Please select plan" ],
    trim: true
  },
  totalAmount: {
    type: Number,
    required: [ true, "Please enter total amount" ],
  },
  possesion: {
    type: Boolean,
    default: false,
  },
  planStartDate: {
    type: Date,
    default:Date.now,
  },
  startDate: {
    type: Date,
    default:Date.now,
  },
  installmentCount: {
    type: Number,
    default: 0,
  },
  possesionAmount: {
    type: Number,
    required: [ true, "Please enter possesion amount" ],
  },
  installmentPerMonth: {
    type: Number,
    required: [ true, "Please enter installemt amount" ],
  },
  ballotAmount: {
    type: Number,
    required: [ true, "Please enter ballot amount" ],
  },
  bookingAmount: {
    type: Number,
    required: [ true, "Please enter booking amount" ],
  },
  fineAmount: {
    type: Number,
    default: 0,
  },
  halfYearPayment: {
    type: Number,
    required: true
  },

  totalInstallmentCount:{
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [ true, "Please join a user ID" ],
  },
  plotNumber: {
    type: String,
    required: [ true, "Please join a plot number" ],
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




//Todo: ************************** Adding virtual properties ******************************
// ***** Whatever return will be set to virtual property value
installmentSchema.virtual( 'fine' ).get( function () {
  let days=Math.ceil(Math.abs(this.dueDate - new Date(Date.now())) / (1000 * 60 * 60 * 24));
  return days >0 ? this.fineAmount * days : 0;

} )



installmentSchema.virtual( 'total' ).get( function () {

  let total=(this.installmentCount%6===0) ? this.installmentPerMonth+this.fine+this.halfYearPayment:this.installmentPerMonth+this.fine;

  //If user pays posession 
  if(this.possesion && this.possesionAmount){
  total+=this.possesionAmount;
  this.possesionAmount=0;
  }

  return total;
} )

installmentSchema.virtual( 'dueDate' ).get( function () {
  return new Date(new Date( this.startDate ).setMonth( this.startDate.getMonth()+1 ));
} )





//Todo: ************************** Document/query/aggregation middlewares ******************************

// ******** DOCUMENT MIDDLEWARE: runs before .save() and .create()
installmentSchema.pre('save', async function(next) {
    // HERE 'this' keyword === current document 


    next();
})


// ******** QUERRY MIDDLEWARE: runs before executing any find query
installmentSchema.pre(/^find/, async function(next) {
    // HERE 'this' keyword === querry Obj



    next();
})


// ******** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipepline
installmentSchema.pre('aggregate', async function(next) {
    // HERE 'this' keyword === aggregation Obj



    next();
})




//TODO:  ************************** instance methods of documents ******************************


installmentSchema.methods.checkName = async function() {
    return ""; // return anything based on logic
}


const Installment = mongoose.model('Installment', installmentSchema);


module.exports = Installment;