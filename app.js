// If, else if, else:
// 1.

// Checking Age for Different Ticket Prices
// - Child ticket: $5 (below 12 years)
// - "Teen ticket: $7" (below 18 years)
// - "Senior ticket

// $10 (between 18 and 60)
// - "Adult ticket: $10" (over 60years)

let checkAge = 25;

if (checkAge < 12) {
  console.log("Child ticket: $5");
} else if (checkAge <= 18) {
  console.log("Teen ticket: $7");
} else if (checkAge > 18 && checkAge <= 60) {
  console.log("Adult ticket: $10");
} else {
  console.log("Senior ticket");
}
