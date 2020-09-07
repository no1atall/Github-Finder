//Init github
const github = new Github;

//Init UI
const userInterface = new UserInterface

//Search Input
const searchUser = document.querySelector("input");

///Search Input Event Listner
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;
  if (userText != "") {
    //Make HTTP call
    github.getUser(userText).then((data) => {
      if(data.profile.name === null || data.profile.message === "Not Found") {
        //Clear Interface
        userInterface.clearProfile()
        

      } else {
        //Show Profile
        userInterface.showProfile(data.profile)
      }
    });
  } 
});
