const fs = require('fs')

fs.readFile(_resume + '/info.json', 'utf8', function(err,data){
    if (err) {
			console.log(err);
		} else {
			console.log(data);
			return data;
		}
})