//Dave Boling 
//CoderByte.com
//Challenge: Alphabet Soup
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
This is simply, a selection sort. It can be best explained by the logic behind it.

YouTube: https://www.youtube.com/watch?v=6nDMgr0-Yyo
*/


function AlphabetSoup(str) {

  str = str.split('');
  var oldBig, newBig = '';
  
  for (var i = 0; i < str.length; i++){
    for (var k = 0; k < str.length; k++){
      
      if(str[k] > str[i]){
        oldBig = str[i];
        newBig= str[k];
        str[k] = oldBig;
        str[i] = newBig;
      }
  }
 }
      
  str = str.join('');
      
  return str;
         
}