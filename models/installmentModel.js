const mongoose=require( 'mongoose' );
const validator=require( "validator" );  // 3rd part validation package
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
  possession: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    default: function () {
      return new Date( this.startDate ).setMonth( this.startDate.getMonth()+1 )
    },
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
  bookingAmount: {
    type: Number,
    required: [ true, "Please enter booking amount" ],
  },
  fineAmount: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [ true, "Please join a user ID" ],
  },
  plot: {
    type: mongoose.Schema.ObjectId,
    ref: "Plot",
    required: [ true, "Please join a plot ID" ],
  }




}, {
  // TO SEE VIRTUAL FIELDS 
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },

} );




//Todo: ************************** Adding virtual properties ******************************
// ***** Whatever return will be set to virtual property value
// installmentSchema.virtual( 'nickName' ).get( function () {
//   return this.name.slice(0,3);
// } )





//Todo: ************************** Document/query/aggregation middlewares ******************************

// ******** DOCUMENT MIDDLEWARE: runs before .save() and .create()
installmentSchema.pre( 'save', async function ( next ) {
  // HERE 'this' keyword === current document 


  next();
} )


// ******** QUERRY MIDDLEWARE: runs before executing any find query
installmentSchema.pre( /^find/, async function ( next ) {
  // HERE 'this' keyword === querry Obj



  next();
} )


// ******** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipepline
installmentSchema.pre( 'aggregate', async function ( next ) {
  // HERE 'this' keyword === aggregation Obj



  next();
} )




//TODO:  ************************** instance methods of documents ******************************


installmentSchema.methods.checkName=async function () {
  return ""; // return anything based on logic
}


const Installment=mongoose.model( 'Installment', installmentSchema );


module.exports=Installment;