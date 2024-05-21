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
