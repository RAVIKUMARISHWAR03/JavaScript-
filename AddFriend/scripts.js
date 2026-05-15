var istatus = document.querySelector("h5");

var Btn = document.querySelector("#add");
var check = 0;

Btn.addEventListener("click", function () {
  
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    Btn.innerHTML = "Remove Friend";
    check = 1;
    
  } 
  else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    Btn.innerHTML = "Add Friend";
    check = 0;
  }
});
