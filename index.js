
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
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}