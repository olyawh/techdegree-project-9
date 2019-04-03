// Moving letters
$('.letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.letters .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 900,
      delay: function(el, i) {
        return 65*i;
      }
    }).add({
      targets: '.letters',
      opacity: 0.9,
      duration: 950,
      easing: "easeOutExpo",
      delay: 950
    });




    //Start page

document.querySelector('.start-button').addEventListener('click', fadeOutEffect);
function fadeOutEffect() {
  var fadeOverlay = document.getElementById("overlay");
  var fade = setInterval(function () {
      if (!fadeOverlay.style.opacity) {
          fadeOverlay.style.opacity = 1;
         
      }
      if (fadeOverlay.style.opacity > 0) {
          fadeOverlay.style.opacity -= 0.1;
        
      } else {
          clearInterval(fade);
          fadeOverlay.style.display = 'none';
      }
  }, 100);
}



