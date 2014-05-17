//Dave Boling 
//CoderByte.com
//Challenge: First Factorial
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
A factorial is a number that is a non-negtaive number denoted by n!

For example: 5! or 512!

5! = 5 * 4 * 3 * 2 * 1 = 120;
*/

//First Factorial
function FirstFactorial(num) {
  for ( var i = num - 1; i > 1; i--){
    num = num * i;
  }
  return num;
}

console.log(FirstFactorial(5));
//returns 

console.log(FirstFactorial(512));
//return Infinity
/* Why inifinity?
Because the number exceeds upper limit of float point of: 1.7976931348623157E+10308
The same would occur for -1.7976931348623157E+10308
*/