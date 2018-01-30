// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)
var files = fs.readdirSync("C:\\Users\\cwiedema\\Downloads\\Volksvalley_V2x.SampleModMap");


files.forEach(element => {
  console.log(element);
  
});