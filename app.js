// If else: Needs to be solved with if, else and with ternary operator

// 1. Check Age for Voting Eligibility
// 2. Determining Pass or Fail Based on Score 0-100 ( below 65 is a fail )
// 3. Check temperature for comfort level ( comfort is between 20 and 25 )
// 4. Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)

// 1-
let ageForVoting = 18;

if (ageForVoting >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can not vote!");
}

ageForVoting >= 18
  ? console.log("You can vote now! - Ternary")
  : console.log("You can not vote!!! - Ternary");
// 2 -
let score = 65;

if (score >= 65) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}

score >= 65
  ? console.log("You passed!! - Ternary")
  : console.log("You've failed! - Ternary");
// 3-

let temperature = 25;
if (temperature >= 20 && temperature <= 25) {
  console.log("Checking temperature.... Comfort Level");
} else {
  console.log("The temperature is out of comfort level");
}

temperature >= 20 && temperature <= 25
  ? console.log("Comfort Level - Ternary")
  : console.log("The temperature is out of comfort level - Ternary");

// 4 -

let amount = 100;

if (amount >= 100) {
  console.log("Free shipping!");
} else {
  console.log("Shipping cost's $10");
}

amount >= 100
  ? console.log("Free shipping! - Ternary")
  : console.log("Shipping cost's $10 - Ternary");
