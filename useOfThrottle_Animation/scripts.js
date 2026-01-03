function throttle(fn, delay) {
  let t = 0;
  return function (...args) {
    let now = Date.now();
    if (now - t >= delay) {
      fn.apply(this, args);
      t = now;
    }
  };
}
document.querySelector("#center").addEventListener(
  "mousemove",
  throttle((details) => {
    var div = document.createElement("div");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1767277672167-18105701959b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
    );
    div.appendChild(img);

    div.classList.add("imageDiv");

    gsap.to(img, {
        y: "0",
        ease : Power1,
        duration :.6,
    });
 
    gsap.to(img, {
        y:"100%",
        delay : .6,  
        ease : Power2
    });       
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
