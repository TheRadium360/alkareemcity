const dotenv=require( "dotenv" );
dotenv.config( {
  path: "./../config.env"
} )
const twilio=require( 'twilio' )(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


const body='Holidays are coming!';
const number="+923217452433"

twilio.messages
  .create( {
    to: number,
    from: process.env.TWILIO_NUMBER,
    body: body
  } )
  .then( message => {
    console.log( message.sid );
  } )
  .catch( err => console.error( err ) );