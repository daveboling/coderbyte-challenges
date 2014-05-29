//Dave Boling 
//CoderByte.com
//Challenge: Time Convert
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Converts a variable that represents seconds to minutes AND reminaing seconds.

Example: 126 seconds = 2mins 6 seconds

*/

function TimeConvert(num) {
  
  var mins = num / 60;
  var seconds = num % 60;

  
  return Math.floor(mins) + ":" + seconds;
         
}

//Math.floor will return the neareast whole number

console.log(TimeConvert(126));
//returns 2:6


/* 


You could add a 0 to single digit seconds by using checking if num is less than 10


if (seconds < 10) {
	return Math.floor(mins) + ":0" + seconds;
}
else { return Math.floor(mins) + ":" + seconds }


Generally, it's a good idea to have only 1 return, as multiple exits
can get sloppy. Just keep a close eye.


*/