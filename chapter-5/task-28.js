// Login authentication simulation

const userName = "Dio";
const password = "stron";

// evaluate invalid credential first
if (userName !== "Dio" || password !== "strong") {
  // equal to (true || true), OR return first truthy value or last value if both true
  console.log("Invalid username or password"); // this statement evaluate first
} else {
  console.log("Login successful");
}
