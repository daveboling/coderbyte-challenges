//Dave Boling 
//CoderByte.com
//Challenge: Word Count
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Checks to see if 'a' is exactly 3 characters away from 'b'. Which is exactly what the regex performs.
*/


function ABCheck(str) {

	var a = /a.{3}b/;
	var b = /b.{3}a/;
  
  //Checks to see if it does this forward and backwards.
  return a.test(str) || b.test(str);
         
}


console.log(ABCheck('Laura sobs')); //true
console.log(ABCheck('accccb')); //false
console.log(ABCheck('bzzza')); //true