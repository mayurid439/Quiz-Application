var questions = [{
	"question": "Which of this method of class StringBuffer is used to reverse sequence of characters?",
	"option1": "reverse()",
	"option2": "reverseall()e",
	"option3": "Reverse()",
	"option4": "reverseAll()",
	"answer": "1"
}, {
	"question": "Which of these method of class String is used to remove leading and trailing whitespaces?",
	"option1": "trim()",
	"option2": "startsWith()",
	"option3": "Trim()",
	"option4": "doTrim()",
	"answer": "1"
}, {
	"question": "Which of these operators can be used to concatenate two or more String objects?",
	"option1": "+",
	"option2": "+=",
	"option3": "&",
	"option4": "||",
	"answer": "1"
}, {
	"question": "Which method of class String is used to compare two String objects for their contains ?",
	"option1": "equals()",
	"option2": "Equals()",
	"option3": "isEqual()",
	"option4": "IsEqual()",
	"answer": "1"
}, {
	"question": "Web pages are written using ?",
	"option1": "FTP",
	"option2": "HTTP",
	"option3": "HTML",
	"option4": "URL",
	"answer": "3"
}, {
	"question": " Which of the below does not implement Map interface ?",
	"option1": "HashMap",
	"option2": "Hashtable",
	"option3": "EnumMap",
	"option4": "Vector",
	"answer": "4"
}, {
	"question": "Which of the following is a thread safe ?",
	"option1": "StringBuilder",
	"option2": "StringBuffer",
	"option3": "Both of the above",
	"option4": "none of the above",
	"answer": "3"
}, {
	"question": "Which of these keywords must be used to handle the exception thrown by try block in some rational manner?",
	"option1": "try",
	"option2": "finally",
	"option3": "throw",
	"option4": "catch",
	"answer": "4"
}, {
	"question": "Which of these exceptions will occur if we try to access the index of an array beyond its length ?",
	"option1": "ArithmeticException",
	"option2": "ArrayException",
	"option3": "ArrayIndexException",
	"option4": "ArrayIndexOutOfBoundsException",
	"answer": "4"
}, {
	"question": " In which of the following package exception class exist.",
	"option1": "Java.util",
	"option2": "Java.filet",
	"option3": "Java.io",
	"option4": "Java.lang",
	"answer": "4"
}];


var appContainer = document.getElementById('cont'),
	questionEl = document.getElementById('question'),
	opt1 = document.getElementById('opt1'),
	opt2 = document.getElementById('opt2'),
	opt3 = document.getElementById('opt3'),
	opt4 = document.getElementById('opt4'),
	nxtBtn = document.getElementById('next'),
	result = document.getElementById('result'),
	
	currentQuestion = 0,
	totQuestions = questions.length,
	score = 0;


function loadQuestion(questionIndex) {
	'use strict';
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}

function loadNextQuestion() {
	'use strict';
	var selectedOption = document.querySelector('input[type=radio]:checked'),
		answer;
	if (!selectedOption) {
		alert('Please Select Your Answer');
		return;
	}
	answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion += 1;
	if (currentQuestion === totQuestions - 1) {
		nxtBtn.textContent = 'Finish';
	}
	
	if (currentQuestion === totQuestions) {
		appContainer.style.display = 'none';
		result.style.display = '';
		result.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);