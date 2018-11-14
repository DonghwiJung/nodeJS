console.log('Whats up man');
console.log('%d', 100);
person = {
    name: 'donghwi',
    age: 30,
    feature: 'handsome'
}
console.log('%j', person);
console.dir(person);

console.log('%s', __filename);
console.log('%s', __dirname);
console.dir(process.argv);

process.argv.forEach(function(item, index){
    console.log(index + ': ' + item);
});