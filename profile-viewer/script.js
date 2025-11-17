/*TODO
- function to call https://api.github.com/users/ API
- function to render the UI
- add event listener to the button
- store latest fetch to local storage 
*/

const btn = document.querySelector(".btn");
const usernameInput = document.querySelector("#username");
const profileDiv = document.querySelector("#profile");
const searchForm = document.querySelector("#search-form");

function loadOfflineData() {
  renderUI(data);
}

function renderUI(data) {
  let html = `
    <img src="${data.avatar_url}" class="avatar">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    `;
  if (data.location && data.location != null) {
    html += `<p>🌍 Location : ${data.location}</p>`;
  }

  if (data.blog && data.blog != null) {
    html += `<p>🔗 Blog : <a href="${data.blog}">${data.blog}</a></p>`;
  }

  if (data.public_repos) {
    html += `<p>📁 Public Repositories : ${data.public_repos}</p>`;
  }

  html += `<p>👥 Followers : ${data.followers} | Following : ${data.following}</p>`;
  html += `<p><a href ="${data.html_url}">View Profile 	→	; </a></p>`;
  profileDiv.innerHTML = html;
}

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let username = usernameInput.value;
  if (username) {
    //loadOfflineData();
    fetchUserData(username);
  }
});
async function fetchUserData(username) {
  profileDiv.innerHTML = "<p>Loading...⌚</p>";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found " + response.status);
    } else {
      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      renderUI(data);
    }
  } catch (error) {
    profileDiv.innerHTML = `❌ <p>${error.message}</p>`;
  }
}

function loadInitialData(){
    if(localStorage.getItem("userData")){
        const data = JSON.parse(localStorage.getItem("userData"));
        renderUI(data);
    }
}

loadInitialData();