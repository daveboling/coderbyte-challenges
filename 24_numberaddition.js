//Dave Boling 
//CoderByte.com
//Challenge: Number Addition
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
We're pulling numbers from a string using a regex. In this regex, it will
pull 1 or more numbers in a group since all of them are separated by a word.
Then, we're using a for loop and parseInt in order to add them
as integers. 
*/


function NumberAddition(str) {

  var numbers = /[0-9]*/g;
  var numAr = str.match(numbers);
  var result = 0;

  
  for(var i = 0; i < numAr.length; i++){
    if(isNaN(parseInt(numAr[i]))) {continue;}
    result += parseInt(numAr[i]);

  }
  
  
  return result;
         
}