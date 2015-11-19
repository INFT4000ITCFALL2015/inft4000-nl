/**
 * Created by inet2005 on 11/17/15.
 */
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
console.log(file.toString().split('\n').length - 1);
