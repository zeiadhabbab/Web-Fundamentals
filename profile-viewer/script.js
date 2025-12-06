/*TODO
- function to call https://api.github.com/users/ API
- function to render the UI
- add event listener to the button
 HEAD
- store latest fetch to local storge 
*/
//UI element as DOM item (DOM = Document Object Model)
const btn = document.querySelector(".btn");
const userInput = document.querySelector("#username");
const profileDiv = document.querySelector("#profile");
const searchForm = document.querySelector("#search-form");
/* use these to check
console.log(btn);
console.log(userInput);
console.log(profileDiv);
console.log(searchForm);
*/
let data;

function renderUI (data) {
    let html = `
    <img class="avatar" src="${data.avatar_url}"
    <p>Name : ${data.name}</p>
    <p>Bio : ${data.bio}</p>
    `;

    if (data.location && data.location !=""){
        html += `<p> Location 🌎 : ${data.location} </p>`
    }
    
    if (data.bio && data.bio !=""){
        html += `<p> Blog : ${data.bio} </p>`
    }

    if (data.public_repos){
        html += `<p> Repos : ${data.public_repos} </p>`
    }
    html += `<p> Followers : ${data.followers} | Following : ${data.following} </p>`
    html += `<p> <a target="_blank" href="${data.html_url}"> View Profile </a> </p>`   // target="_blank" --> this will open the link ain a new tab


    profileDiv.innerHTML= html;
}

async function fetchUserData (userName){
    profileDiv.innerHTML = "<p>Loading .. </p>"
    try{
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) { throw new Error("User not found" + response.status); }
        else {data = await response.json(); localStorage.setItem("user-data" , JSON.stringify(data)) ; renderUI(data);  }
    } catch(err){
        profileDiv.innerHTML= `<p> ${err.message} </p>`
    }
}
function saveLastData(){
    if (localStorage.getItem("user-data")){
        const data = JSON.parse(localStorage.getItem("user-data"));
        renderUI(data);
    }
}
saveLastData();
//now add the code for fetch button
searchForm.addEventListener("submit" , function(e){
    e.preventDefault();
    let userName = userInput.value;
    if (userName) { fetchUserData(userName); }
});