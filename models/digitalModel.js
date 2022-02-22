const mongoose=require( 'mongoose' );
const validator=require( "validator" );  // 3rd part validation package
// const slugify=require( "slugify" );
// const bcrypt=require( 'bcryptjs' );
// const crypto=require( 'crypto' );



//Optimize:  ************************** digital Modal Schema ******************************
const digitalSchema=new mongoose.Schema( {
  name: {
    type: String,
    unique:true,
    required: [ true, "Please enter name!" ],
    trim: true
  },
  category: {
    type: String,
    required: [ true, "Please select the category!" ],
    default:'Others'
  },
  contact:{
    type:String,
    required: [ true, "Please enter phone number!" ],
  },
  description: {
    type: String,
    required: [ true, "Please enter description!" ],
  },
  image:{
   type:String,
   default:'dummy.jpg'
  },

},
//  {
  // TO SEE VIRTUAL FIELDS 
  // toJSON: {
  //   virtuals: true
  // },
  // toObject: {
  //   virtuals: true
  // },

// }
 );




//Todo: ************************** Adding virtual properties ******************************
// ***** Whatever return will be set to virtual property value
// digitalSchema.virtual( 'nickName' ).get( function () {
//   return this.name.slice(0,3);
// } )





//Todo: ************************** Document/query/aggregation middlewares ******************************

// ******** DOCUMENT MIDDLEWARE: runs before .save() and .create()
digitalSchema.pre( 'save', async function ( next ) {
  // HERE 'this' keyword === current document 


  next();
} )


// ******** QUERRY MIDDLEWARE: runs before executing any find query
digitalSchema.pre( /^find/, async function ( next ) {
  // HERE 'this' keyword === querry Obj



  next();
} )


// ******** AGGREGATION MIDDLEWARE: runs before executing Agrregation pipepline
digitalSchema.pre( 'aggregate', async function ( next ) {
    // HERE 'this' keyword === aggregation Obj



  next();
} )




//TODO:  ************************** instance methods of documents ******************************


3
digitalSchema.methods.checkName=async function () {
  return ""; // return anything based on logic
}


const digitalModel=mongoose.model( 'Digital_Pages', digitalSchema );


module.exports=digitalModel;