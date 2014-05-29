//Dave Boling 
//CoderByte.com
//Challenge: Counting Minutes I 
//Difficulty: Easy
//Profile: http://www.coderbyte.com/CodingArea/Profile/?user=kadowki

/* 
-----Explanation-----


*/


function CountingMinutesI(str){

  str = str.split('-');

  //Time One
  var timeOne = str[0].split(/am|pm/).join('').split(':');
  var timeOneHr = parseInt(timeOne[0]);
  var timeOneMin = parseInt(timeOne[1]);

  //Time Two
  var timeTwo = str[1].split(/am|pm/).join('').split(':');
  var timeTwoHr = parseInt(timeTwo[0]);
  var timeTwoMin = parseInt(timeTwo[1]);

  //am/pm
  var tOne = str[0].match(/am|pm/g).join('');
  var tTwo = str[1].match(/am|pm/g).join('');

  var result; //Using one variable so that we only need one return
  var minDiff = timeOneMin - timeTwoMin; //Difference in minutes is calculated and added to this

	if(tOne === tTwo){
		if((timeOneHr  > timeTwoHr) && (timeOneMin > timeTwoMin) || 
            (timeOneHr  === timeTwoHr) && (timeOneMin > timeTwoMin) ||
           (timeOneHr > timeTwoHr) && (timeOneMin < timeTwoMin)
          ) {
			timeTwoHr += 24;
		}
            result = ((timeOneHr - timeTwoHr)*60) + minDiff;
	}
	else if (tOne === 'pm' && tTwo === 'am' || tOne === 'am' && tTwo === 'pm') {
			timeTwoHr += 12;
			result = ((timeOneHr - timeTwoHr)*60) + minDiff;
		}




return Math.abs(result);

}



"2:03pm-1:39pm" 
