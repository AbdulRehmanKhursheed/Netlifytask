// // exports.handler = function (events, context, callback) {
// //     const {name} = JSON.parse(events.body);
// //     setTimeout(function () {
// //         console.log('running')
// //         callback(null,{
// //             statusCode:200,
// //             body:'Hello '+name
// //         });
// //       }, 40000)
    


// // };
// const axios = require("axios");

// exports.handler = async function (event, context, callback) {
//   const data = await axios("https://jsonplaceholder.typicode.com/photos");
//   if (event.httpMethod == "GET") {

//     callback(null, {
//       statusCode: 200,
//       body: JSON.stringify({
//         data:data.data ,
//       }),
//     });
//   } else if (event.httpMethod == "POST") {
//     callback(null, {
//       statusCode: 200,
//       body: JSON.stringify({
//         msg: "Post request recieved !",
//       }),
//     });
//   } else {
//     callback(null, {
//       statusCode: 200,
//       body: "Not a `get` request neither `post` ",
//     });
//   }
// };
exports.handler = async (event, context) => {
  setTimeout(function(){
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Serverless Functions are cool! 😎"
      })
    }
  },11000);
  
}