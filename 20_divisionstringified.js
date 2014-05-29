//Dave Boling 
//CoderByte.com
//Challenge: Division Stringified
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
First off, we need to divie num 1 and 2 and round it to neareast whole number.
Now, in order to split this number we'll make it a string.

You see that reverse there? Why is it there? Commas are added
from right to left, not vice-versa. So when we're counting digits
and adding commas, we need to make sure they're going in the right 
place. 

So, now we need to check if the number is less than 3, if it is nothing is needed.
Else, it'll divide by 3 for every digit to see if it's remainder is 0. If it
is dividible, we need to add a comma there!

Lastly, we'll reverse the number back to its proper position and
then join it together back into a string.

Voila!

*/


function DivisionStringified(num1,num2) {

  var theNum = (Math.round(num1 / num2)).toString().split('').reverse();
  
  for(var i = theNum.length-1; i > 0; i--){
    if(theNum.length <= 3) {break;}
    else if(i % 3 === 0) { theNum.splice(i, 0, ','); }
  }
  
  return theNum.reverse().join('');
         
}

DivisionStringified(123456789, 10000); //12,346