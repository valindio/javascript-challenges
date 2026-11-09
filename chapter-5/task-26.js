// Grade Simulation
const score = 75;

if (score >= 90 && score <= 100) {
  console.log("Score : A");
} else if (score >= 80) {
  console.log("Score : B");
} else if (score >= 70) {
  console.log("Score : C");
} else if (score >= 60) {
  console.log("Score : D");
} else if (score <= 60 && score >= 0) {
  console.log("Score: F");
} else {
  console.log("Invalid Score");
}
