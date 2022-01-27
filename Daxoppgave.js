Const = toTheMainPage = document.querySelector(".iAm")
   
toTheMainPage.addEventListener("click", (mainpage), )

function mainpage(){
    console.log("Hello world");
    getReady = document.querySelector(".startscreen");
    getReady.style.visibility = "hidden";
}

var yourName = [];

function theUsersName() {
    nameValue = document.getElementById('user').value;
    yourName.push(nameValue);  
    console.log(yourName);
    displayName();
}

function displayName() {
    var showName = (yourName[0]);
    console.log("hello Geir",showName);
    
  }