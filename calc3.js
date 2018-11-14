var eventEmitter = require('events').EventEmitter;
var util = require('util');

var calc = function() {
    this.on('exit', function(){
        console.log('calculator exit')
    })
}

util.inherits(calc, eventEmitter)

calc.prototype.add = function(a, b){
    return a + b
}

module.exports = calc