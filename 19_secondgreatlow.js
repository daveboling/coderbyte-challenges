//Dave Boling 
//CoderByte.com
//Challenge: Second Great Low
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki


/* 
Array.prototype.filter()
Parameters: value, index, array
Callback returns a user defined callback

Example: unique() a function used for filtering unique array elements is passed in.

Note: Call requires these parameters in order for filter to work.
function unique(value, index, ar) {
     return ar.lastIndexOf(value) === index;
}

This will return the only if the lastIndexOf (value) is 
exactly equal to the current index. [7, 7, 1]. This
would cause unique() to return ONLY the lastIndexOf(7)
on this pass. If the return is false, it simply returns 
the current index.
*/

function SecondGreatLow(arr) {
  
  function unique(value, index, ar) {
     return ar.lastIndexOf(value) === index;
  }

  arr = arr.sort(function(a, b) {return a-b;}).filter(unique);
                   
  if (arr.length === 2) {
    return arr[1] + " " + arr[0];
  }
  else if (arr.length > 2) {
    return arr[1] + " " + arr[arr.length-2];
  }
}

SecondGreatLow([7, 7, 12, 98, 106]);