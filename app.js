// 2. Checking Day of the Week
// - Monday - Start of the work week!
// - Wednesday - Midweek!
// - Friday - Almost weekend!
// - Other day - Just another day.

let checkDay = "";

if (checkDay == "Monday") {
  console.log("Start of the work week!");
} else if (checkDay == "Wednesday") {
  console.log("Midweek!");
} else if (checkDay == "Friday") {
  console.log("Almost weekend!");
} else if (checkDay === "") {
  console.log("Please choose any day of the week!!");
} else {
  console.log("Just another day.");
}
