// 4. Simple Login System ( if the credentials match)
// - username: admin, pass: adminpass - Welcome, admin!-
// username: user123 , pass: password123 - Welcome, user123!
// - missmatch -  Invalid username or password.

let userName = "user123";
let password = "password123";

if (userName === "admin" && password === "adminpass") {
  console.log("Welcome, admin!");
} else if (userName === "user123" && password === "password123") {
  console.log("Welcome, user123!");
} else {
  console.log("Invalid username or password.");
}
