function printedSong() {
    console.log("We found light in a shadowed place,");
    console.log("Sparkling rays, a warm embrace.");
    console.log("We found love that carries us through,");
    console.log("In the heart of storms, it's always true.");
    console.log("We found light in a shadowed place,");
    console.log("Sparkling rays, a warm embrace.");
}
function refrain() {
    console.log("We found light in a shadowed place,");
    console.log("Sparkling rays, a warm embrace.");
}

function song() {
    refrain();
    console.log("We found love that carries us through,");
    console.log("In the heart of storms, it's always true.");
    refrain();
}

song();

function refactoredRefrain() {
    return "We found light in a shadowed place,\nSparkling rays, a warm embrace.";
}

function refactoredSong() {
    console.log(refactoredRefrain());
    console.log("We found love that carries us through,");
    console.log("In the heart of storms, it's always true.");
    console.log(refactoredRefrain());
}

refactoredSong();