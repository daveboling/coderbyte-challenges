//Dave Boling 
//CoderByte.com
//Challenge: Powers of Two
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
All this is doing is progressively incrementing the power of 2
until power is less than the input number. If it is, it will exit the
while loop before adding another 'power', thus either leaving it equal
or not equal to 'power'.
*/

function PowersofTwo(num) {
var i = 1;
var power = Math.pow(2, i);

while(power < num){
    i++;
    power = Math.pow(2, i);
}

    if (num === power)  {return true; }
    else { return false; }
  
}

console.log("Powers of Two (16): " + PowersofTwo(16));
console.log("Powers of Two (124): " + PowersofTwo(124));
console.log("Powers of Two (8): " + PowersofTwo(8));


   