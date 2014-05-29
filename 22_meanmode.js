//Dave Boling 
//CoderByte.com
//Challenge: Mean Mode
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----


*/

function MeanMode(arr) {

  var mean = 0, mode;
  arr = arr.sort(function(a, b){return a-b;});
  
  //Calc mean
  for(var i = 0; i < arr.length; i++){
    mean += arr[i];
  }
  
  mean = mean / arr.length;
  console.log("Mean: " + mean);
  
  //Calc mode
  mode = arr[Math.floor(arr.length / 2)];
  console.log(mode);
  
  if(mean === mode) { return 1;}
                  
  return 0; 
         
}

MeanMode([4, 4, 4, 6, 2]);