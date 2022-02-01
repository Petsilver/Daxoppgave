const toTheMainPage = document.querySelector(".iAm")
const luckyNumberis = document.querySelector("#luckynumber");

   
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
    document.getElementById("showName").textContent = showName
  }

function luckyNumber() {
    luckyNumberis.textContent = Math.round(Math.random() * 1000);
}
console.log(luckyNumber());

setTimeout(
    () => {
        luckyNumber();
        setInterval(() => {
            luckyNumber();
        }, 20 * 1000
        );
    }
);

