
var myQuestions = [
    {
        question: "Whoamongthe following is not among the gods of Egypt?",
        answers: {
         a: 'Nefertiti',
         b: 'Bastet',
         c:'Horus',
         d: 'Anubis',
        
        } ,correctAnswer: 'Nefertiti'
    }, 


     {
        question: "Which brand is a statement to just do it?",
        answers: {
            a: 'under armour',
            b: 'addidas',
            c: 'nike',
            d: 'puma',
        
        } ,correctAnswer: 'nike'
    }, 

     {
        question: "Which fruit is famous for containing enzymes that digest proteins(bromeline)?",
        answers: {
            a: 'pawpaw',
            b: 'banana',
            c: 'mango',
            d: 'pineapple',
        
        } ,correctAnswer: 'pineappple'
    }, 

     {
        question: "Which of the following is not a primary color?",
        answers: {
            a: 'red',
            b: 'blue',
            c: 'green',
            d: 'indigo',
        
        } ,correctAnswer: 'indigo'
    }, 

     {
        question: "What color the flag Kenya stand for peace?",
        answers: {
            a: 'red',
            b: 'blue',
            c: 'white',
            d: 'green',
        
        } ,correctAnswer: 'white'
    }, 

     {
        question: "Which of these is not a movie streaming platform?",
        answers: {
            a: 'netflix',
            b: 'netflify',
            c: 'hulu',
            d: 'disney plus',
        
        } ,correctAnswer: 'netlify'
    }, 
    
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
	    var answers ;

	   for(var i=0; i<questions.length; i++){
		
		answers = [];

		for(letter in questions[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}
	

	function showResults(questions, quizContainer, resultsContainer){
		var answerContainers = quizContainer.querySelectorAll('.answers');
	
	
	var userAnswer = '';
	var numCorrect = 0;
	
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			
			answerContainers[i].style.color = 'lightgreen';
		}
		else{

			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
	

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}




