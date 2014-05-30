//Dave Boling 
//CoderByte.com
//Challenge: Swap Case
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
The regex method test() is being used to see if str[i] is true. If it is, that
array element should be switched to a different case. 

Note: Using the global modifier will cause it to parse the entire array.
TL;DR, It'll screw it up.
*/


function SwapCase(str) { 

  var lower = /^[a-z]$/;
  var upper = /^[A-Z]$/;
  str = str.split('');

  
  for(var i = 0; i < str.length; i++){
      if(upper.test(str[i])) {str[i] = str[i].toLowerCase();}
      else { str[i] = str[i].toUpperCase(); }
    }
  
  return str.join('');
         
}