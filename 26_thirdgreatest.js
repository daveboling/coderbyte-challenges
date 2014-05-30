//Dave Boling 
//CoderByte.com
//Challenge: Third Greatest
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----
First, let's sort the array in ascending order. 

Example: This would cause the array of ['one', 'two', 'three'] to 
look like ['two', 'one', 'three']

In its current state, if we return arr[0], it will be correct, 
but what if there's a smaller string there?

Example: Already sorted array of ['o','two', 'one', 'three']

We know that from right to left, two is the third greatest number. So, in order
to produce the correct third greatest number, simply reverse the array's order
using reverse(). Now return the third element which should be the third greatest.

NOTE:
We could just use the sort() method to do this for us beforehand without
using reverse(). I know this. Sometimes, you gotta take up a little extra
memory for things to make a little more sense.

*/

function ThirdGreatest(strArr) {

  strArr = strArr.sort(function(a,b){return a.length >= b.length; }).reverse();
  
  return strArr[2];
         
}