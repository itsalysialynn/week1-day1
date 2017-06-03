function whatToDoForLunch(hungry, availableTime) {
  if (availableTime < 20) {
    console.log(
      "Pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates"
    );
  } else if (availableTime < 45) {
    console.log("You deserve a break and could try a place in Gastown");
  } else {
    console.log(
      "This is a bootcamp after all and you should probably reconsider"
    );
  }
}

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
