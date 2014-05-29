//Dave Boling 
//CoderByte.com
//Challenge: Array Addition I
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----
array: Sort the array in ascending order, least to greatest.
biggest: Set variable equal to the biggest number in the array by pop() it off the end
addUp: A variable for adding up all numbers together

1. Add all the numbers. If they happen to equal the biggest, return true.
2. Didn't work? Try subtracting each number in the array 1 at a time, 
but don't save the result. Just compare it.
3. If all else fails, return false.
*/

function ArrayAdditionI(arr) {
  
  arr = arr.sort(function(a, b) { return a - b; } );
  var biggest = arr.pop();
  var addUp = 0;
  
  //Add
  for (var j = 0; j < arr.length; j++){
    addUp += + arr[j];
    if(addUp === biggest) {return true;}
  }
  //Subtract
  for (var n = 0; n < arr.length; n++){
    if((addUp  - arr[n]) === biggest) { return true;}
  }
  
  return false;
         
}

console.log(ArrayAdditionI([3,5,-1,8,12]));
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));


/*Bonus
How does this work exactly?

arr.sort(function(a, b) {
  return a - b; 
});

When such a function is passed into array.sort(), 
the array elements are sorted based on the relationship 
between each pair of elements "a" and "b" and the function's 
return value. The three possible return numbers are: 

 Less than 0: Sort "a" to be a lower index than "b"
 Zero: "a" and "b" should be considered equal, and no sorting performed.
 Greater than 0: Sort "b" to be a lower index than "a".

Let's do this step by step.

Start Array: 4, 6, 23, 10, 1, 
Pass 1: 4-6 is less than 0, 4-6 is less than 0, 4-23 is less than 0, 4-10 is less than 0, 4-1 is greater than 0
Current Array: 1, 4, 6, 23, 10

Pass 2: 4-6, 4-23, 4-10...nothing to switch

Pass 3: 6-23, 6-10...nothing to switch

Pass 4: 23-10 is greater than 0
Current Array: 1, 4, 6, 10, 23

Pass 5: There is no 'b', sorting is done.

End result: 1, 3, 4, 6, 10, 23




*/