document.querySelector(".swipe").addEventListener("click", function() {
    document.querySelector(".swipe").src = toggleImg();
});

function toggleImg() {
    let initialImg = document.querySelector(".swipe").src;
    let srcTest = initialImg.includes('notoggle.png');
    let newImg = {
      'true':'toggle.png', 
      'false':'notoggle.png'}[srcTest];
  
    return newImg;
  }