// Part 1: Click to reveal the answer

const answerButton = document.getElementById("answerButton");
const answer = document.getElementById("answer");

answerButton.addEventListener("click", function () {
    answer.style.display = "block";
    answerButton.textContent = "Answer Revealed";
});


// Part 2: Mouse over the image to show the migration stages

const journeyBox = document.getElementById("journeyBox");
const journeyImage = document.getElementById("journeyImage");
const journeySteps = document.getElementById("journeySteps");

journeyBox.addEventListener("mouseover", function () {
    journeyImage.style.display = "none";
    journeySteps.style.display = "flex";
});

journeyBox.addEventListener("mouseout", function () {
    journeyImage.style.display = "block";
    journeySteps.style.display = "none";
});


// Part 3: Press S to help the salmon move upstream

const movingSalmon = document.getElementById("movingSalmon");
const successMessage = document.getElementById("successMessage");

let salmonStep = 0;

document.addEventListener("keydown", function (event) {

    if (event.key === "s" || event.key === "S") {

        salmonStep = salmonStep + 1;

        if (salmonStep === 1) {
            movingSalmon.style.right = "180px";
            movingSalmon.style.bottom = "120px";
        }

        else if (salmonStep === 2) {
            movingSalmon.style.right = "320px";
            movingSalmon.style.bottom = "190px";
        }

        else if (salmonStep === 3) {
            movingSalmon.style.right = "470px";
            movingSalmon.style.bottom = "270px";
        }

        else if (salmonStep === 4) {
            movingSalmon.style.right = "620px";
            movingSalmon.style.bottom = "360px";
        }

        else if (salmonStep >= 5) {
            movingSalmon.style.right = "780px";
            movingSalmon.style.bottom = "420px";

            successMessage.style.display = "block";
        }
    }

});