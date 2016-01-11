function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    start = new Date();
	for (var i = 0; i < 1000; i++) {
		  Math.sqrt(i);
		}
		end = new Date();

    rl.on('line', function (line) {
        console.log(line);
        console.log((end.getTime() - start.getTime()));

    });
    
    
}
processFile('sites.txt');
