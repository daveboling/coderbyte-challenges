//Dave Boling 
//CoderByte.com
//Challenge: Dash Insert
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
In order to add '-' to this integer, it needs to become a string.
Let's also split it into an array of characters so we can compare
it with our 'odd' array.

The for loop is very simple

The first loop is to start at the begging of 'num' and compare
each of its characters with the second 'for' loop that loops through
'odd'. If the index 'i' matches a character, it needs to check
to see if the next character is odd as well. If it is, we need
to add a '-' to num[i].

At the end, simply join the array of character back together to
form the string.

*/

function DashInsert(num) {
  
  num = num.toString().split('');
  var odd = ['1','3', '5', '7', '9'];
  

 for(var i = 0; i < num.length; i++){
    for(var k = 0; k < odd.length; k++){
      if(num[i] === odd[k]){
        for(var j = 0; j < odd.length; j++){
          if(num[i+1] === odd[j]){
             num[i] += "-";
          }
        }
      }
    }
  }
  
  return num.join('');
         
}