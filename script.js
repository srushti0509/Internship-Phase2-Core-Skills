
let completedTasks = [];

function completeTask(taskNumber) {
    if (!completedTasks.includes(taskNumber)) {
        completedTasks.push(taskNumber);

        document.getElementById("status" + taskNumber).innerText =
            "Completed successfully!";

        document.getElementById("progress").innerText =
            "Completed: " + completedTasks.length + " / 3";
    }
}

function checkAnswer(answer) {
    let result = document.getElementById("quiz-result");

    if (answer === "CSS") {
        result.innerText = "Correct! CSS is used to style webpages.";
    } else {
        result.innerText = "Incorrect answer. Try again!";
    }
}
