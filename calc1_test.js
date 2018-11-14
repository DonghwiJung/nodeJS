var calc2 = require('./calc1.js');
console.log(calc2.add(10, 20));

var nconf = require('nconf');
nconf.env();
var OS = nconf.get('OS');

console.log(OS);
console.dir(OS);