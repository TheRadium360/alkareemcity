const mongoose=require( 'mongoose' );
const validator=require( "validator" );  // 3rd part validation package
// const slugify=require( "slugify" );
// const bcrypt=require( 'bcryptjs' );
// const crypto=require( 'crypto' );



//Optimize:  ************************** complaint Modal Schema ******************************
const complaintSchema=new mongoose.Schema( {
  subject: {
    type: String,
    required: [ true, "Please fill the subject" ],
    trim: true
  },

  name: {
    type: String,
    required: [ true, "Please fill the name" ],
    trim: true
  },

  email: {
    type: String,
    required: [ true, "Please fill the email" ],
    validate: [ validator.isEmail, "Invalid Email!" ],
    trim: true
  },

  description: {
    type: String,
    trim: true,
    required: [ true, "Please describe your complaint in description box" ]
  },

  date: {
    type: Date,
    default: Date.now,
  },

  active: {
    type: Boolean,
    default: true,
    enum: {
      values: [ true, false ],
      message: "User complaint must be false/true",
    }

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
// complaintSchema.virtual( 'nickName' ).get( function () {
//   return this.name.slice(0,3);
// } )





//Todo: ************************** Document/query/aggregation middlewares ******************************

// ******** DOCUMENT MIDDLEWARE: runs before .save() and .create()
complaintSchema.pre( 'save', async function ( next ) {
  // HERE 'this' keyword === current document 


  next();
} )


// ******** QUERRY MIDDLEWARE: runs before executing any find query
complaintSchema.pre( /^find/, async function ( next ) {
  // HERE 'this' keyword === querry Obj

  this.find( { active: true } );

  next();
} )


// ******** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipepline
complaintSchema.pre( 'aggregate', async function ( next ) {
  // HERE 'this' keyword === aggregation Obj



  next();
} )




//TODO:  ************************** instance methods of documents ******************************



complaintSchema.methods.checkName=async function () {
  return ""; // return anything based on logic
}


const Complaint=mongoose.model( 'Complaint', complaintSchema );


module.exports=Complaint;