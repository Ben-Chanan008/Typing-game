//globals
let isPlaying = false;
const count = document.querySelector('.small_green');
const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const card = document.querySelector('.card');
const time = document.querySelector('#small');
const score = document.querySelector('.id_score');
const showingText = document.querySelector('.showing-text');
const showing = document.querySelector('.game-over');
const high = document.querySelector('.small_hi_score');
const fontAwesome = document.querySelector('.fas');
// high.innerHTML = localStorage.getItem('highscore')
/* *********** CHANGEABLES *********** */
count.innerHTML = "5";
input.value = ''
let sec = 6,
    countSec = 6,
    scoreVal = 0;

/******************************** WORDS ************************************/
const wordList = [
    'word',
    'laughter',
    'api',
    'javascript',
    'traversy',
    'Jerimiah',
    'Sunday',
    'Saturday',
    'Akbhar',
    'David',
    'Moses',
    'incomprehending',
    'acceptance',
    'servants',
    'jailbreak',
    'weather',
    'constants',
    'algebra',
    'John',
    'atom',
    'intellig',
    'jet',
    'quails',
    'liver',
    'heart',
    'Jodha',
    'classes',
    'programming',
    'salvation',
    'computer',
    'ferocious',
    'ferrous',
    'independable',
    'exactly',
    'concubines',
    'wreckage',
    'xachoo',
    'server',
    'kidney',
    'precipitate',
    'understanding',
    'lukewarm',
    'coffee',
    'superstar',
    'Erling',
    'Great',
    'Victory',
    'barcelona',
    'Kovacic',
    'mercy',
    'faithfulness',
    'makebelieve',
    'best',
    'worlds',
    'little',
    'singer',
    'programmer',
    'typescript',
    'python',
    'Brad',
    'Hamilton',
    'Clinton',
    'valuational',
    'ununderstandable',
    'misunderstanding',
];

function showAWord(){
    const show  = Math.floor(Math.random() * wordList.length);
    showingText.innerHTML = wordList[show];
}

// if (localStorage.getItem('highscore') && localStorage.getItem('highscore').length)
//     overallScore = parseInt(localStorage.getItem('highscore'));

// function +>
// setInterval(gameOver, 50)
/* ************** functions **************** */

window.addEventListener('onload', showAWord())
// TIMER FUNC
function timer(){
    if(countSec > 0){
        countSec--;
        time.innerHTML = countSec;
        isPlaying = true;
    } else if(countSec === 0){
        showing.innerHTML = 'Gameover!!!';
        isPlaying = false;
    }
}

// CHECK SCORES 
function checkScores(word){
    if(showing.innerHTML === 'Gameover!!!'){
        score.style.display = 'none';
        scoreVal = -1
        score.innerHTML = scoreVal;
    } else{
        // return;
        score.style.display = 'inline';
    }
   if(word === showingText.innerHTML.toLowerCase()){
        showing.innerHTML = 'Correct!!'
        scoreVal++;
        score.innerHTML = scoreVal;
        input.value = ''
        countSec = sec;
        showAWord();
        // easier();
   } else{
        return;
   }
//    console.log(sec);
}

// HIGH SCORE
/* ************** FUNCTIONS ****************** */
// timer();

/* ************  EVENTS FOR STARTING GAME  ***************** */

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    checkScores(e.target.value);
    setInterval(checkScores, 10);
    // console.log(e)
});

input.addEventListener('focus', (e) => {
    timer();
    levels(e.target.value);
    setInterval(levels, 1000);
    setInterval(timer, 1000);
});   

/* ********** LOGICS ************** */
input.addEventListener('keydown', (e) => isPlaying && e.target.value.length && e.key.toString().toLowerCase() === 'backspace' && e.preventDefault());
/* *********** FONTAWESOME ***************** */
// function cont(){
//     fontAwesome.style.animation = 'down .2s ease in out';
//     if(fontAwesome.style.transform === 'translate'){

//     }
// }

// buttons
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
const extreme = document.querySelector('#ext');
const inst = document.querySelector('#instr');
// const card = document.querySelector('.card')
// function easier(){
//     if(easy.addEventListener('click', (e) => {
//         countSec = 11
//         count.innerHTML = "10"; })){
//             countSec = 11
//             count.innerHTML = "10";
//     }
//     console
// }

// function levels(word){
//     if(word === showingText.innerHTML.toLowerCase()){
//         showing.innerHTML = 'Correct!!'
//         scoreVal++;
//         score.innerHTML = scoreVal;
//         input.value = ''
//         countSec = 11;
//         showAWord();
//         easier();
//         console.log(word)
//    } else{
//         return;
//    }
// }

easy.addEventListener('click', (e) => {
    countSec = 11
    count.innerHTML = "10";
    levels();
    
});

medium.addEventListener('click', (e) => {
    sec = 6;
    count.innerHTML = "5";

});

hard.addEventListener('click', (e) => {
    sec = 5;
    count.innerHTML = "4";
});


extreme.addEventListener('click', (e) => {
    sec = 4;
    count.innerHTML = "3";
});


inst.addEventListener('click', (e) => {
    card.classList.add('extras')
});

inst.addEventListener('dblclick', (e) => {
    card.classList.remove('extras')
});

/* ********************* API ******************** */
// getWord();
// async function getWord(){
//     const res = await fetch('https://wordsapiv1.p.mashape.com/words/');
//     const words = await res.json();
//     console.log(words)
    
//     words.results.forEach(wordShow => {
//         wordList.push(wordShow)
//     });
// }