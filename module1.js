function myFunction() {
    console.log('myFunction module1 was called')
}

var myVariable = 'Variable module1\n';

module.exports.myFunction = myFunction;
module.exports.myVariable = myVariable;