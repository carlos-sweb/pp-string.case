const capitalize = require('./module/capitalize.js')
const decapitalize = require('./module/decapitalize.js')
const lowerCase = require('./module/lowerCase.js')
const upperCase = require('./module/upperCase.js')
const camelCase = require('./module/camelCase.js');



console.log( camelCase('Carlos Illesca') );
console.log( camelCase('Carlos--Illesca') );
console.log( camelCase('carlos                           iIIesca') );
