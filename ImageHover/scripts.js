var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function() {
       val.childNodes[3].style.opacity = 1;
       console.log("enter")
    });
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0;
        console.log("leave");
    });

    val.addEventListener("mousemove" , function(dets){
      val.childNodes[3].style.left = dets.x+"px";
      val.childNodes[3].style.top = dets.y+"px";
    });
});
