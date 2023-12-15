// Declaring datatype
let score=33
// Conversion of Number datatype into String Datatype
let scoreInString =String(score)
// console.log(scoreInString)
// console.log(typeof scoreInString)


// Conversion of String Datatype into Number DataType

scoreInNumber= Number(scoreInString)
// console.log(typeof scoreInNumber)

// Conversion of Boolean datatype
let sore=false
let soreInNumber =Number(sore)
// console.log(typeof soreInNumber)
// console.log(soreInNumber)

// Conversion of Number Datatype in Boolean Datatype
let num= 324
let numInBoolean=Boolean(num)
console.log(numInBoolean)
console.log(+numInBoolean)

let num1=""
let num1InBoolean=Boolean(num1)
// console.log(num1InBoolean)
let num2=null
let num2InBoolean=Boolean(num2)
// console.log(+num2InBoolean)
// console.log(!num2InBoolean)


// Notes
/* ""=>false
"usman"=>true
0=> false
NaN => false
null=> false */
// Operators
/* Equal to : == , ===
Greater than : >
Less Than : <
Not equal to: !=, !==
Greater than or equal to : >=
Less than or equal too : <=
Logical AND : &&
Logical OR : || 
Not : !
Nullish coalescing operator : ?? (use when variable is null or undefined)
Addition
Subtraction
*/
// Basic Arithmatic Operation
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(3/2)
// console.log(3%2)
// console.log("Hello"+" Usman")

// Confusing Operation
console.log(5 + "10") // String Concatenation
console.log("10" - 3) // String Unary Minus
// Type Coercion
let x = "10";
let y = 5;
// console.log(x==y);
// console.log(x===y);
// console.log(x>y);
// console.log(`${x} and ${y}`);

// Difference between prefix increment like ++number, and postfix increment like number++
// Prefix Increment : It will increase the value before using it in expression
// Postfix Increment : It will use the value of number first then increases its value
let a = 1;
console.log(a++) // Output -> 1
// Value of a -> 2
console.log(a)   // Output -> 2
let b = 1;
console.log(++b) // Output -> 2
// Value of b -> 2
console.log(b)   // Output -> 2
// Logical operators
// && means logical And
// || means logcial Or
