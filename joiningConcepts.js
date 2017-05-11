var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

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

var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");