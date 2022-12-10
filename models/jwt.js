//Toekn consist

//header, payload, signature



//JWT defines the structure of information
// we are sending from
// one party to the another



// two forms –
// Serialized
// Deserialized.

 //The Serialized approach is mainly used to
 // transfer the data through 
 //the network
 // with each request and response. 



 //While the deserialized approach is used
 // to read and write data
 // to the web token.



 //Deserialized

//JWT in the deserialized form contains only the
//header and the payload.
//Both of them are
// plain JSON objects.


//Header

//A header in a JWT is mostly used to describe the
// cryptographic operations 
//applied to the JWT


//e.g
/*
{
    "typ":"JWT",
    "alg":"HS256"
 } 
 
 */




//Payload

//The payload is the part of the JWT where 
//all the user data is actually 
//added
/* e.g
{
     "userId":"b07f85be-45da",
     "iss": "https://provider.domain.com/",
     "sub": "auth/some-hash-here",
     "exp": 153452683
 }
 */

 /* Serialized

JWT in the serialized form represents a string of the following format:

[header].[payload].[signature]

*/





/* 

header:
{
  "alg" : "HS256",

  "typ" : "JWT"
}

Payload:
{
  "id" : 123456789,

  "name" : "Joseph"
}

Secret: GeeksForGeeks


JSON Web Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.
OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o
*/

/*data = 
base64urlEncode(header) + 
"." + base64urlEncode(payload)*/