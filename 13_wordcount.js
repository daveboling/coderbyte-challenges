//Dave Boling 
//CoderByte.com
//Challenge: Word Count
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
Simply uses JavaScript String.string() on every blank and outputs
the length of the 'strSplit' array as a word count.
*/


function WordCount(str) {
  
  var num = 0;
  var strSplit = str.split(' ');
  
  return strSplit.length;
         
}

var sentence = 'How many words 22 is this 16 sentence?';

console.log('How many words 22 is this 16 sentence?:' + WordCount(sentence));



