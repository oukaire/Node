var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = '.' + process.argv[3]
fs.readdir(dir, function (err, list) {
	var len = list.length
	for(var i=0; i<len; i++) {
		if (path.extname(list[i]) == ext)
			console.log(list[i])
	}
})