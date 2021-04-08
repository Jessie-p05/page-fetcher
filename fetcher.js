const request = require('request');
const readline = require('readline');
const fs = require('fs');
const args = process.argv.splice(2, process.argv.length);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.


  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
  })
})



