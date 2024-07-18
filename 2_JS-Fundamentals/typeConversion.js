/**Type Conversion */

/**Convert to String */
// String();
console.log(String(100));//white color means string
console.log(100);//blue color means number
// boolean to String
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString();
console.log((123).toString());
// null and undefined can't be converted to string using toString();
// give error
// console.log((null).toString());


/** Convert to Number */
// Number();
console.log(Number("100"));//number
console.log(Number("Value"));//NaN
console.log(Number("10.5")+5);//15.5

// boolean to number
console.log(Number(true));//1


/**Unary + Operator --- works on Variables */
let a = "123";
console.log(+a);//123


//parseInt();
console.log(parseInt('12345'));
// parse till the number as the string arrives it stops
console.log(parseInt('123.4f'));//123
console.log(parseInt('12345ffffff'));//12345


//parseFloat();
console.log(parseFloat('123.45f'));//123.45
console.log(parseFloat("3.14.15"));//3.14

/**Convert to Boolean */
console.log(Boolean(''));//empty- false
console.log(Boolean('12345ffffff'));//true
console.log(Boolean(undefined));//false
console.log(Boolean("false"));//true


var x = "hello world";
var y = "The code says" + Number(x);
console.log(y);