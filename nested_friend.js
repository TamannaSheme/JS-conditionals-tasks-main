
let myScore = 85; // example score
let friendScore = 75; // example score
let action;

if (myScore > 80) {
    if (friendScore > 80) {
        action = "Go for lunch";
    } else if (friendScore >= 60) {
        action = "Good luck next time";
    } else if (friendScore >= 40) {
        action = "Keep friend's message unseen";
    } else {
        action = "Block friend";
    }
} else {
    action = "Go home, sleep, and act sad";
}

console.log(action);
