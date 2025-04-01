
// 1: printedSong()
// This function prints "Old McDonald Had a Farm" using individual console.log() statements.
function printedSong() {
  console.log("Old McDonald had a farm,");
  console.log("E-I-E-I-O.");
  console.log("And on that farm he had a cow,");
  console.log("E-I-E-I-O.");
  console.log("With a moo moo here,");
  console.log("And a moo moo there,");
  console.log("Here a moo, there a moo,");
  console.log("Everywhere a moo moo,");
  console.log("Old McDonald had a farm,");
  console.log("E-I-E-I-O.");
}
printedSong();

//2:function (refrain)
// Create a refrain() function to handle the repetitive line.
function refrain() {
  console.log("E-I-E-I-O.");
}

function song() {
  console.log("Old McDonald had a farm,");
  refrain();
  console.log("And on that farm he had a cow,");
  refrain();
  console.log("With a moo moo here,");
  console.log("And a moo moo there,");
  console.log("Here a moo, there a moo,");
  console.log("Everywhere a moo moo,");
  console.log("Old McDonald had a farm,");
  refrain();
}

// Calling the song function
song();
//3: Refactor using the return statement
// Create a refactoredRefrain() function that returns the refrain as a single string.
function refactoredRefrain() {
  return "E-I-E-I-O.";
}

function refactoredSong() {
  console.log("Old McDonald had a farm,");
  console.log(refactoredRefrain());
  console.log("And on that farm he had a cow,");
  console.log(refactoredRefrain());
  console.log("With a moo moo here,");
  console.log("And a moo moo there,");
  console.log("Here a moo, there a moo,");
  console.log("Everywhere a moo moo,");
  console.log("Old McDonald had a farm,");
  console.log(refactoredRefrain());
}

// Calling the refactoredSong function
refactoredSong();
