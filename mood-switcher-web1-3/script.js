"use strict"
console.log("App started");

const moods = [
    {"moodText": "Sad", "emoji": "☹️", "color": "red"},
    {"moodText": "Calm", "emoji": "😌", "color": "lightblue"},
    {"moodText": "Angry", "emoji": "😡", "color": "orange"},
    {"moodText": "Happy", "emoji": "😀", "color": "blue"},
    {"moodText": "Focuse", "emoji": "🧠", "color": "green"},
];


// Load all elements from dom
const moodTextDiv = document.getElementById('mood-text');
const autoBtn = document.getElementById('auto-btn');
const changeBtn = document.getElementById('change-btn');

//Defined vars
let intervalId = null;
let time = 2000;

let count = 0;


//definde function
function getRandomMood(moods){
    let randomIndex = 0;
    if(count < moods.length){

        randomIndex = count;
        count++;

    }else{

        count = 0;
    }
    //let randomIndex = Math.floor(Math.random() * (moods.length));
    return moods[randomIndex];
}

function updateMood(moodObj){
    let emoji = moodObj.emoji;
    let moodText = moodObj.moodText;
    let color = moodObj.color;
    let textDev = 'Your current mood is: <strong>' 
                        + moodText + '</strong> ' + emoji;
    moodTextDiv.innerHTML = textDev;
    document.body.style.backgroundColor = color;

}

function autoMoodSet(){
    const randMood = getRandomMood(moods);
    updateMood(randMood);
}



//event listener

changeBtn.addEventListener('click', function(event){
    const randMood = getRandomMood(moods);
    updateMood(randMood);
});


autoBtn.addEventListener('click', function(event){
    autoMoodSet();

    if(intervalId == null){
        autoBtn.textContent = 'Stop'; 
        intervalId = setInterval(function(){
            autoMoodSet();
        }, time);

    }else{

        autoBtn.textContent = 'Auto Mode'; 
        clearInterval(intervalId);
        intervalId = null;
    }

});