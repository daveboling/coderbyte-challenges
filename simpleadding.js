//Dave Boling 
//CoderByte.com
//Challenge: Time Convert
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Adding up to a certain number based on which number is given
Example: 9 = 1+2+3+4+5+6+7+8+9 = 45

*/

function SimpleAdding(num) {

  var newNum = 0;
  for(var i = 1; i<=num; i++){
    newNum += i;
  }
  return newNum;
         
}

console.log(SimpleAdding(9));