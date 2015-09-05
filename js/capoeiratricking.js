$(document).ready(function(){
      ion.sound({ sounds: [ {name: "button_tiny"} ], path: "/sounds/", preload: true, volume: 0.7 });
      $("a").on("mouseover", function(){ ion.sound.play("button_tiny"); });
});

$("header").vegas({
      timer: false,
      delay: 17000,
      preload: true,
      overlay: '/img/overlays/07.png',
      slides: [
        { src: "/img/hansabu-freeze-2600x2250px.png", valign: "30%", transition: "swirlRight" },
      ],
      animation: 'kenburnsUpLeft',
      transitionDuration: 9000,
});

