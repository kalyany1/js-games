"use Script";

let divPrevGuess = document.getElementById('divPrevGuess');
const divLastGuessMsg = document.getElementById('divLastGuessMsg');
const divGuessStatus = document.getElementById('divGuessStatus');
const divStartNewGame = document.getElementById('divStartNewGame');
const btnSubmit = document.getElementById('btnSubmit');
let sGuess = document.getElementById('txtGuess');
let divGuessCount = document.getElementById('divGuessCount');    

btnSubmit.addEventListener('click', checkGuess);

let iRandom = Math.floor((Math.random() * 100) + 1);
console.log('Random number: ' + iRandom);
let iCounter=0; sGuess.focus();

function checkGuess() {
     
    let iGuess = Number(sGuess.value);

    if(iGuess != '' || iGuess != null || iGuess != undefined){
        console.log('txtGuess is not empty');
        console.log('txtGuess: ' + iGuess +'.');

        if(iCounter==0) divPrevGuess.textContent= 'Previous Guess Numbers: '+ ' ' + iGuess;
        else divPrevGuess.textContent +=' ' + iGuess;

        if(iGuess>iRandom){                        
            divGuessStatus.textContent='Oops!';divGuessStatus.style.color='red';
            divLastGuessMsg.textContent='Your guess was higher. Try a lower number!';
        }else if(iGuess<iRandom){
            divGuessStatus.textContent='Oops!';divGuessStatus.style.color='red';
            divLastGuessMsg.textContent='Your guess was lower. Try a higher number!';        
        } else if(iGuess===iRandom){
            divGuessStatus.textContent='Yeah!';divGuessStatus.style.color='green';
            divLastGuessMsg.textContent='Your guess was spot on!';
            divStartNewGame.style.display='';
            btnSubmit.disabled=true;
            divGuessStatus.textContent='<<< GAME OVER >>>';
            divGuessStatus.style.color='green';
        }
    }
    else{
        console.log('txtGuess is empty');
        divPrevGuess.textContent=divPrevGuess.textContent + ' ' + 0;
    }
    iCounter++;
    divGuessCount.textContent= 'Guess counter: ' + iCounter;
    if(iCounter>6){        
        divStartNewGame.style.display='';
        btnSubmit.disabled=true;
        divGuessStatus.textContent='<<< GAME OVER >>>';
        if(sGuess!=iRandom)divGuessStatus.style.color='red';
        else divGuessStatus.style.color='green';
    }

    sGuess.focus();sGuess.value='';
}

function restartGuess(){
    divStartNewGame.style.display='none';
    btnSubmit.disabled=false;
    divGuessCount.textContent='';
    divGuessStatus.textContent='';
    divLastGuessMsg.textContent='';
    divPrevGuess.textContent='';
    iCounter=0;
    txtGuess.focus();
    txtGuess.value='';
    iRandom = Math.floor((Math.random() * 100) + 1);    
}

