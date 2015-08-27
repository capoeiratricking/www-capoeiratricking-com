$(document).ready(function(){
      ion.sound({ sounds: [ {name: "button_tiny"} ], path: "/sounds/", preload: true, volume: 0.7 });
      $("a").on("mouseover", function(){ ion.sound.play("button_tiny"); });
});

$("header").vegas({
      timer: false,
      delay: 7000,
      preload: true,
      overlay: '/img/overlays/06.png',
      slides: [
        { src: "/img/yuppiecapoeira-header.jpg" }
      ],
      animation: 'kenburns',
      transitionDuration: 9000,
});


