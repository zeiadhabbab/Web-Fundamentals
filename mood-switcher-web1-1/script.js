const changeMoodBtn = document.getElementById('change-btn');
const autoMode = document.getElementById('auto-btn');
const moodText = document.getElementById('mood-text');

const moods = [ 
    {text: 'Happy', emoji: '😄', color: 'green'},
    {text: 'Sad', emoji: '🙁', color: 'blue'},
    {text: 'Angry', emoji: '😠', color: 'red'},
    {text: 'Calm', emoji: '😌', color: 'lightblue'},
    {text: 'focused', emoji: '👩‍💻', color: 'pink'}
];

function getRandomMood() {
    const randomIndex = Math.floor(Math.random() * moods.length);
    console.log("Random Index:", randomIndex);
    return moods [randomIndex];
}
 function updateMood(event) {
   const mood = getRandomMood();
   console.log("Selected Mood:", mood);
   let modeTextContent =
   
 }