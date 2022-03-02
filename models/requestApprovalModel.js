const mongoose=require( 'mongoose' );
const validator=require( "validator" );  // 3rd part validation package
// const slugify=require( "slugify" );
// const bcrypt=require( 'bcryptjs' );
// const crypto=require( 'crypto' );



//Optimize:  ************************** requestApproval Modal Schema ******************************
const requestApprovalSchema=new mongoose.Schema( {

  transactionImage: {
    type: String,
    required: [ true, "Please provide your transaction reciept image" ]
  },
  installment: {
    type: mongoose.Schema.ObjectId,
    ref: "Installment",
    required: [ true, "Please installment ID" ],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [ true, "Please provide user ID" ],
  },
  plotNo: {
    type: String,
    required: [ true, "Please provide plot number" ]
  },
  status: {
    type: Boolean,
    default: false
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
// requestApprovalSchema.virtual( 'nickName' ).get( function () {
//   return this.name.slice(0,3);
// } )





//Todo: ************************** Document/query/aggregation middlewares ******************************

// ******** DOCUMENT MIDDLEWARE: runs before .save() and .create()
requestApprovalSchema.pre( 'save', async function ( next ) {
  // HERE 'this' keyword === current document 


  next();
} )


// ******** QUERRY MIDDLEWARE: runs before executing any find query
requestApprovalSchema.pre( /^find/, async function ( next ) {
  // HERE 'this' keyword === querry Obj

  this.find( { status: false } );


  next();
} )


// ******** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipepline
requestApprovalSchema.pre( 'aggregate', async function ( next ) {
  // HERE 'this' keyword === aggregation Obj



  next();
} )




//TODO:  ************************** instance methods of documents ******************************


requestApprovalSchema.methods.checkName=async function () {
  return ""; // return anything based on logic
}


const RequestApproval=mongoose.model( 'RequestApproval', requestApprovalSchema );


module.exports=RequestApproval;