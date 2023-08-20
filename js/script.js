// Registration Form
const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Process the form data (retrieve values using FormData)
    const formData = new FormData(registrationForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const city = formData.get("city");
    const state = formData.get("state");
    const college = formData.get("college");

    // Navigate to the quiz page
    window.location.href = "quiz.html";
  });
}

// JavaScript code for quiz page

// Quiz Questions and Answers (Example)
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is JavaScript primarily used for in web development?",
    options: [
      "Server-side scripting",
      "Database management",
      "Enhancing interactivity and user experience",
    ],
    answer: "Enhancing interactivity and user experience",
  },
  {
    question: "Which HTML tag is used for creating an unordered list?",
    options: ["<ul>", "<ol>", "<li>"],
    answer: "<ul>",
  },
  {
    question: "What is the purpose of a CSS reset?",
    options: [
      "To remove all default styles applied by browsers",
      "To add more styles to an HTML document",
      "To create animations",
    ],
    answer: "To remove all default styles applied by browsers",
  },
  {
    question: "What does API stand for in web development?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Automated Programming Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "What is the purpose of the <a> tag in HTML?",
    options: [
      "To create a section heading",
      "To define an image",
      "To create hyperlinks",
    ],
    answer: "To create hyperlinks",
  },
  {
    question: "What is the default method for an HTML form?",
    options: ["GET", "POST", "PUT"],
    answer: "GET",
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "border"],
    answer: "margin",
  },
  {
    question: "What is the purpose of a media query in responsive web design?",
    options: [
      "To play media files on a web page",
      "To create animations",
      "To apply different styles based on device characteristics",
    ],
    answer: "To apply different styles based on device characteristics",
  },
  {
    question:
      "Which programming language is commonly used for building server-side applications?",
    options: ["HTML", "JavaScript", "PHP"],
    answer: "PHP",
  },
  {
    question: "What does CMS stand for in web development?",
    options: [
      "Computer Management System",
      "Content Management System",
      "Creative Media Studio",
    ],
    answer: "Content Management System",
  },
  {
    question: "Which HTML tag is used for creating a table?",
    options: ["<table>", "<div>", "<section>"],
    answer: "<table>",
  },
  {
    question: "What is the purpose of the alt attribute in an <img> tag?",
    options: [
      "To add a border around the image",
      "To specify the image source",
      "To provide alternative text for screen readers",
    ],
    answer: "To provide alternative text for screen readers",
  },
  {
    question: "Which CSS property is used for changing the font color of text?",
    options: ["font-family", "font-size", "color"],
    answer: "color",
  },
  {
    question:
      "What is the purpose of the <meta> tag in the <head> section of an HTML document?",
    options: [
      "To insert JavaScript code",
      "To define the main content of the page",
      "To provide metadata about the document",
    ],
    answer: "To provide metadata about the document",
  },
  {
    question: "Which method is used to fetch data from a server in JavaScript?",
    options: ["GET", "POST", "FETCH"],
    answer: "FETCH",
  },
  {
    question: "What is the purpose of the box-sizing CSS property?",
    options: [
      "To add a border to a box",
      "To change the box's background color",
      "To control the box's sizing behavior",
    ],
    answer: "To control the box's sizing behavior",
  },
  {
    question: "What is a responsive web design framework?",
    options: [
      "A library of pre-designed web templates",
      "A tool for generating code automatically",
      "A collection of CSS and JavaScript resources for building responsive websites",
    ],
    answer:
      "A collection of CSS and JavaScript resources for building responsive websites",
  },
];

// Variables for quiz
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn"); // New: Get the "Submit" button element
let currentQuestion = 0;
let score = 0;

// Function to load quiz question
function loadQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement("h3");
  questionElement.textContent = questionData.question;

  const optionsForm = document.createElement("form");
  optionsForm.className = "col-12 col-md-11 mx-auto";

  questionData.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "form-check-label";
    optionLabel.textContent = option;

    const optionInput = document.createElement("input");
    optionInput.className = "form-check-input";
    optionInput.type = "radio";
    optionInput.name = "answer";
    optionInput.id = `option${index}`;
    optionInput.value = option;

    const optionDiv = document.createElement("div");
    optionDiv.className = "form-check";

    optionDiv.appendChild(optionInput);
    optionDiv.appendChild(optionLabel);

    optionsForm.appendChild(optionDiv);
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsForm);

  // Update navigation buttons
  if (currentQuestion === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentQuestion === quizData.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block"; // Show the "Submit" button on the last question
  } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
}

// Function to calculate and display result
function showResult() {
  // Redirect to result page
  window.location.href = `result.html?score=${encodeURIComponent(score)}`;
  let scoreSpan = document.getElementById("score");
  scoreSpan.value = score;
}

// Event listener for next button
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) return;

  if (selectedOption.value === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Event listener for previous button
prevBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

// Event listener for submit button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) return;

  if (selectedOption.value === quizData[currentQuestion].answer) {
    score++;
  }
  let confirmation = window.confirm("Do you want to submit ??");
  if (confirmation) {
    showResult(); // Call the showResult function to navigate to the result page
  }
});

// Load the first question on page load
window.addEventListener("load", function () {
  loadQuestion();
});

// Back to Home Button (Thank You Button)
function redirectToIndex() {
  // Display thanking alert
  const confirmation = confirm("Thank you for participating!");

  if (confirmation) {
    // Redirect to index.html page
    window.location.href = "index.html"; // Change to the appropriate filename for your home page
  }
}
