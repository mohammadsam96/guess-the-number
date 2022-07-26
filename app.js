const button = document.querySelector('.check-btn');
const again = document.querySelector('.again');

const displayMessage = function(messages){
    document.querySelector('.message').textContent = messages;
}

let score = 20;
document.querySelector('.score').textContent = score;

//High Score
let highScore = 0; 


//Genarate Random Secrate Number.
let secrateNumber = Math.trunc(Math.random() * 20 + 1);

//Secrate Number
document.querySelector('.high-score');


//Onclik Event.
button.addEventListener('click', function (){

    //Input Number.
    let guessNumber = Number(document.querySelector('.guess-number').value);

   if(!guessNumber){
    
    displayMessage('🛑 Not A Number.');

   }else if(guessNumber === secrateNumber){
    // Show Secrate Number If The Guess Number Is Correct.
    document.querySelector('.number').textContent = secrateNumber;

    // Anounce Winner In Heading.
    document.querySelector('h1').textContent = '🎉 Congratulations You Guess The Correct Number.';  
    // Winner Message.  
    displayMessage('✅ Correct Number.');
    // High Score Function.
    if(score > highScore){
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
    }
   }else if(guessNumber !== secrateNumber){
        if(score > 1){
            displayMessage(guessNumber > secrateNumber ? '⏫ Too High.' : '⏬ Too Loo.');
            score--
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('🚫 You Loss The Game.');
            document.querySelector('.score').textContent = 0;
            
        }
    }
});


//Game Reset Functions
again.addEventListener('click', function(){
    //Reset Heading.
    document.querySelector('h1').textContent = 'Guess The Number! 🤔';

    // Reset Secrate Number.
    document.querySelector('.number').textContent = '?';
    // Reset Score.
    score = 20;
    document.querySelector('.score').textContent = score;
    // Reset High Score.
    secrateNumber = Math.trunc(Math.random() * 20 + 1);
   displayMessage('Start guessing...');
    document.querySelector('.guess-number').value = '';
});
