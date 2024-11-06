
let age = 25; // example age
let isStudent = true; // example student status
let fare;
const regularFare = 800;

if (age < 10) {
    fare = "Free";
} else if (isStudent) {
    fare = regularFare * 0.5;
} else if (age >= 60) {
    fare = regularFare * 0.85;
} else {
    fare = regularFare;
}

console.log(fare);
