//Dave Boling 
//CoderByte.com
//Challenge: Palindrome
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
See comments bellow
*/

function palindrome (str) {

	//Use array.split() on all whitespaces, then join together to for one word
    str = str.split(' ').join('');
    //Using the same methods, using array.reverse() then rejoin
    var reverse = str.split('').reverse().join('');

    //check to see if they're equal!
    if(str === reverse) {return true;}
    else { return false; }


}

palindrome('po o p'); //true