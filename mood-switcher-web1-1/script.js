const moods = [
    { text: "Calm", emoji: "☺️", color: "lightblue" },
    { text: "excited", emoji: "🤩", color: "yellow" },
    { text: "Angry", emoji: "😡", color: "red"} ,
    { text: "Sad", emoji: "😭", color: "grey" },
    { text: "Hot", emoji: "🥵", color: "orange" },
    { text: "Cold", emoji: "🥶", color: "cyan" },
    { text: "Cool", emoji: "😎", color: "green" }

]

let index = 0;
let mood = document.getElementById("mood")
let body = document.body
let change_manually = document.getElementById("change-btn");
let change_auto = document.getElementById("auto-btn");

function change() {
    body.style.backgroundColor = moods[index].color;
    mood.innerHTML =  moods[index].text + moods[index].emoji;
    index++;
    if (index >= moods.length) index = 0;
}

let timeInterval ;

change_manually.addEventListener('click', change);

change_auto.addEventListener('click', function () {
    if (timeInterval) { 
        clearInterval(timeInterval); 
        timeInterval = null;
     } //there is a value (running)
    else { timeInterval = setInterval(change, 3000); }
}
); 