var fs = require('fs');

fs.readFile('./package.json', 'utf8', function(err, data){
    console.log(data);
    console.log(err);
})

fs.writeFile('./output.txt', 'Hello', function(err){
    if(err) {
        console.log(err)
        console.log('Error raised!')
    }
    console.dir(data);
})