const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");

inputField.addEventListener("input", function () {
  console.log(inputField.value);
  let password = inputField.value;
  if (password.length < 8) {
    outputField.innerText = "Password is to short";
    outputField.style.color = "red";
  } else {
    /*
        a-z
        A-Z
        0-9
        ! @ # $ % ^ & * ( ) - _ = + [ ] { } \ | ; : ' " , . < > / ? ~ `
        */
    console.log("is lowerCase", password.search(/[a-z]/));
    if (password.search(/[a-z]/) == -1) {
      outputField.innerText = "Password is missing lower case letter";
      outputField.style.color = "red";
    } else if (password.search(/[A-Z]/) == -1) {
      outputField.innerText = "Password is missing Uppercase letter";
      outputField.style.color = "red";
    } else if (password.search(/[0-9]/) == -1) {
      outputField.innerText = "Password is missing a Numeric letter";
      outputField.style.color = "red";
    } else if (
      password.search(/[!@#$%^&*()\-_=+\[\]{};:'",.<>\/?~`|\\]/) == -1
    ) {
      outputField.innerText = "Password is missing Special case symbols";
      outputField.style.color = "red";
    } else {
      outputField.innerText = "Password is to Strong";
      outputField.style.color = "green";
    }
  }
});
