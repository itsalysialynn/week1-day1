var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);


function joinList(list) {
  var empty = "";

  for (var i = 0; i < list.length; i++) {
    if (i < list.length - 1) {
      empty += list[i] + ", ";
    } else {
      empty += list[i];
    } 
	
  } 
  return empty;
} 

console.log("Today I learned about " + concepts + ".");

