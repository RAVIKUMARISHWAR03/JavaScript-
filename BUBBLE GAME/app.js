var timer = 30;
var score = 0;
var hitRn ;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function newHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
}

function makeBuble(){
var clutter ="";

for(var i=1; i<=102; i++){
    var rn =Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#p-bottom").innerHTML = clutter;
}

function runTimer (){
    var timerInt = setInterval(function () {
      if(timer > 0){
        timer--;
        document.querySelector("#timerVal").textContent =timer;
      }else{
        clearInterval(timerInt);
        document.querySelector("#p-bottom").innerHTML = `<h1>GAME IS OVER </h1>`;
      }
    }, 1000);
};
document.querySelector("#p-bottom").addEventListener("click", function(details){
       var clickedNum = Number(details.target.textContent);
       if(clickedNum === hitRn){
        increaseScore();
        makeBuble();
        newHit();
       }
});
makeBuble();
runTimer();
newHit();
