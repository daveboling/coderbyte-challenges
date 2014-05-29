//Dave Boling 
//CoderByte.com
//Challenge: Arith Geo
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
-----Explanation-----

Arithmetic: 
Example array [5, 10, 15]: difference is 5. We need to find this using code.
Let us compare the first result as follows: 10-5 = 5
Now, compare the second result at the end of the array as follows: 15-10 = 5
Result is arithmetic.



Geometric:
Example array [2, 4, 8, 16]: these are multiples of 2. Now, find it using code.
Let us again compare the first result as follows: 4 / 2 = 2
For the second: 16 / 8 = 2
Result is geometric

Note: We must use arr.length, because we don't know how large the array is. 

*/

function ArithGeo(arr) {
  if ((arr[1] - arr[0]) === (arr[arr.length-1] - arr[arr.length-2])) {
    return "Arithmetic";
  } else if ((arr[1] / arr[0]) === (arr[arr.length-1] / arr[arr.length-2])) {
    return "Geometric";
  } else {
    return "-1";
  }
}

console.log(ArithGeo([5, 10, 15]));
console.log(ArithGeo([2, 4, 8, 16]));

