// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:

// arrowFunc=(/*parameters*/)=>//code here
// Examples
// arrowFunc(3) ➞ 3

// arrowFunc("3") ➞ "3"

// arrowFunc(true) ➞ true

const arrowFunc = (param) => param;

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples
// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100
const calculateFuel = (km) => (km <= 10 ? 100 : km * 10);
console.log(calculateFuel(3));

console.log("calculateFuel", calculateFuel(23.5));
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

const pointers = (team1, team2) => team1 * 2 + team2 * 3;
console.log("pointers", pointers(38, 8));

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini
const zodiac = (str) => {
  let arr = str.split("-");
  console.log(arr);
  const result = {
    birthDay: arr[0],
    birthMonth: arr[1],
    birthYear: arr[2],
    yourZodiac: function () {
      let monthDay = this.birthMonth + this.birthDay;
      console.log(monthDay);
      let i = 0;
      while (monthDay >= data[i].from && i < data.length) {
        i++;
      }
      let yourSign = data[i - 1].signName;
      return console.log(`Your Zodiac sign is ${yourSign}`);
    },
  };
  const data = [
    { signName: "Not real day!", from: "0000" },
    { signName: "Capricorn", from: "0101" },
    { signName: "Aquarius", from: "0120" },
    { signName: "Pisces", from: "0220" },
    { signName: "Aries", from: "0321" },
    { signName: "Taurus", from: "0420" },
    { signName: "Gemini", from: "0521" },
    { signName: "Cancer", from: "0621" },
    { signName: "Leo", from: "0723" },
    { signName: "Virgo", from: "0823" },
    { signName: "Libra", from: "0923" },
    { signName: "Scorpio", from: "1023" },
    { signName: "Sagittarius", from: "1123" },
    { signName: "Capricorn", from: "1222" },
    { signName: "Not real day!", from: "1232" },
  ];
  return result.yourZodiac();
};

zodiac("14-02-2002");
zodiac("01-09-1989");
zodiac("03-12-1988");
