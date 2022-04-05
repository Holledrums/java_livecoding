// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// every Human year is 7 years for Dogs, function
function calculateDogAge(puppyAge, rate) {
  if (typeof puppyAge == "number" && typeof rate == "number") {
    // return console.log(
    //     `Your doggie is ${7 * puppyAge} years old in dog years!`
    //   );
    // Bonus
    return console.log(
      `Your doggie is ${rate * puppyAge} years old in dog years!`
    );
  } else {
    return console.log(`Please write a number!`);
  }
}
// Please use a number
calculateDogAge(3, 3);
calculateDogAge("hi", 5);
calculateDogAge(222, 7);
// ------------------------
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// function, max age, my age
function calculateSupply(age, amount) {
  let maxAge = 115;
  let upComingDays = (maxAge - age) * 365;
  let totalFood = upComingDays * amount;
  return console.log(
    `You will need ${totalFood} to last you until the ripe old age of ${maxAge}. You will still have ${upComingDays} `
  );
}
calculateSupply(32, 3);
calculateSupply(44, 4);
calculateSupply("hi", 2);

// ------------------------
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// °C to °F Divide by 5, then multiply by 9, then add 32

// Store a celsius temperature into a variable.
function celsiusToFahrenheit(celsius) {
  let tempF = (celsius / 5) * 9 + 32;
  return console.log(` ${celsius} °C is ${tempF.toFixed(2)} °F`);
}
celsiusToFahrenheit(25);

// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// °F to °C	Deduct 32, then multiply by 5, then divide by 9

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
const fahrenheitToCelsius = (fahrenheit) =>
  console.log(
    ` ${fahrenheit} °F is ${(((fahrenheit - 32) * 5) / 9).toFixed(2)} °C`
  );
fahrenheitToCelsius(80);
