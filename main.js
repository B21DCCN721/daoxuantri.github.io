document.addEventListener("DOMContentLoaded", function() {
    const startQuizButton = document.getElementById("startQuizButton");
    const questionsContainer = document.getElementById("questions");
    const submitButton = document.getElementById("submit");

    startQuizButton.addEventListener("click", function() {
        questionsContainer.style.display = "block";
    });
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        submitTest();
    }); 

    function submitTest() {
        alert("Bài thi đã được nộp!");
    }

});

