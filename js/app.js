
function Question(id, question, answerObject, answer ) {
	this.id = id;
	this.question = question;
	this.answerObject = answerObject;
	this.answer = answer
}

var question1 = new Question(	1, 
								"Which of the following is not a valid javaScript variable name?",
							 	{ 
							 		A : "1variable", 
							 		B : "_variable", 
							 		C : "$variable", 
							 		D : "variable1"
							 	},
							 	"A"
							);
var question2 = new Question(	
								2,
								"Inside which HTML element do we put the JavaScript?", 
								{ 
									A : "<js>", 
									B : "<scripting>", 
									C : "<javascript>", 
									D : "<script>" 
								},
								"D"
							);
var question3 = new Question(	3,
								"What is the correct syntax for referring to an external script called \"app.js\"?",
								{ 
									A : "<script name=\"app.js\">",
								 	B : "<script src=\"app.js\">", 
								 	C : "<script href=\"app.js\">", 
								 	D : "<script link=\"app.js\">" 
								 },
								"B"
							);
var question4 = new Question(	4,
								"How can you add a single line comment in a JavaScript?", 
								{ 
									A : "<!-- commnet -->", 
									B : "// comment", 
									C : " /* comment", 
									D : "*/ comment" 
								},
								"B"
							);
var question5 = new Question(	5,
								"How do you write \"Hello World\" in an alert box?",
								{ 
									A : "alertBox(\"Hello World\")", 
									B : "msgBox(\"Hello World\")", 
									C : "alert(\"Hello World\")", 
									D : "msg(\"Hello World\")" 
								},
								"C"
							);


var questionArray = [question1,question2,question3,question4,question5];


$(document).ready(function(){

	var tempQuestion;
	var tempAnswers = ['A','B','C','D'];
	var questionNumber;
	var score;

	function startQuiz(questionNumber) {
		tempQuestion = questionArray[questionNumber];
		$('#question').text(tempQuestion.question);
		$('#question-count').text(questionNumber+1 + " / " + questionArray.length);
		for (var j = 0; j < tempAnswers.length; j++) {
			$('.answer'+j).text(tempQuestion.answerObject[tempAnswers[j]])
		}
	};

	// Setup initial for overlay window
	$('#overlay').find('h1').text("Welcome to Jacascript Quiz!");
	$('#overlay').find('.btn-start').text("Start Quiz");
	$('.btn-start').on('click', function(){
		$('#overlay').find('h2').remove();
		score = 0;
		questionNumber = 0;
		startQuiz(questionNumber);
		$('#overlay').hide();
	});
	//startQuiz(questionNumber);
	
	$('.btn').on('click', function(){
		var ans = $(this).find('.answer-sign').text();
		var $h1 = $('.result').find('h1');
		$('.result').show();
		if(ans.substring(0,1) === tempQuestion.answer) {
			score += 10;
			$h1.text("Correct!");
			$h1.removeClass('wrong');
			$h1.addClass('correct');
		} else {
			$h1.text("Wrong!");
			$h1.removeClass('correct');
			$h1.addClass('wrong');
		}
	});

	$('.result').on('click', function(){
		questionNumber++;
		// make questionNumber validation
		$('.result').hide();
		if (questionNumber < questionArray.length) {
			startQuiz(questionNumber);
		} 
		else {
			$('#overlay').find('h1').text("Congragulation!!!");
			$('.btn-start').before('<h2>You finished quiz with score: <span class="score"></span></h2>');
			$('#overlay').find('.btn-start').text("Restart Quiz");
			$('.score').text(score);
			$('#overlay').show();
		}
		
	});
	
	
  
});


/*
for(var i = 1; window["question"+i] !== undefined; i++) {
  console.log(window["question"+i].question);
  console.log(i);
 };
*/