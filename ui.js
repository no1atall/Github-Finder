class UserInterface {
  constructor() {
    this.profile = document.getElementById("profile");
    this.error = document.getElementById("");
  }
  showProfile(user) {
    console.log(user);
    console.log(user.html_url);
    this.profile.innerHTML = `
        <div class="ui hidden divider"></div>
        <div class="ui center aligned grid">
            <div class="">
                <img class="ui medium centered image" src="${user.avatar_url}"></img>
                <div class="ui hidden divider"></div>
                
                <a  class="ui fluid teal button" href="${user.html_url}"  target="_blank">View Profile</a>
                
                
            </div>
            
            <div class="nine wide column">
                <span class="ui small header">Name:</span>
                <span>${user.name}</span>
                <br><br>
                <span class="ui small header">Public Repos:</span>
                <span>${user.public_repos}</span>
                <br/>
                <br> 
                <span class="ui small header">Public Gists:</span>
                <span>${user.public_gists}</span>
                <br/>
                <br>  
                <span class="ui small header">Public Followers:</span>
                <span>${user.followers}</span>
                <br/>
                <br>  
                <span class="ui small header">Public Following:</span>
                <span> ${user.following}</span> 
            </div>
        </div>
        `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
