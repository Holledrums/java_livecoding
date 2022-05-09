
function countdown(x) {

    if (x == 0) { // Abbruchbedingung, also in diesem Fall keine Rekursion.
        console.log("LIFT OFF");
    } else {
        console.log(x);
        countdown(x - 1); // Hier bewegt sich der Parameter in Richtung Abbruchbedingung 0
    }
}

countdown(10);
