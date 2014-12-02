var sumTacos = require("./mySum.js"); // local files have to have relative or absolute paths. /mysum.js

var fs = require('fs');

fs.writeFile('temp.text', "this is some text",function(){
	console.log("file writ");
})

console.log("end of code");