var babel = require('babel-core')
var fs = require('fs')

babel.transformFile('./src/reactg.js', {stage: 0}, function (err, result) {
	fs.writeFile('./bin/reactg.js', result.code, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("Compiled src/reactview to bin");
	}); 
});