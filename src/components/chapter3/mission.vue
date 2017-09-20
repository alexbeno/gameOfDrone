<template>
  <div class="chapter3Mission">
    <video src="/static/video/attaque.mp4" autoplay class="chapter3Mission--video"></video>
    <p class="chapter3Mission--txt">Les missions des drones sont extrêmement précises. Décidées par des personnes haut placées directement au pays, elles ont depuis quelque temps pour objectif d’éliminer des cibles présentes sur des “kill lists”. Ainsi, plutôt que de lancer des assauts ou chars sur le terrain, créant un véritable champ de bataille, le drone va espionner et tuer directement une cible précise.</p>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter3MissionbuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter3MissionbuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter3Mission', '/chapitre3/justice', '/chapitre3/enemis', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter3Mission--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre3/justice');
        }, 500)
    };
    aud.onplaying = function() {
      var vol = document.getElementById("chap3audio");
      var currentvol = vol.volume;
      var lowVol = true;
      if(lowVol === true)
      {
        var inter = setInterval(function ()
        {
          if(vol.volume > 0.5)
          {
            vol.volume -= 0.2;
          }
          else
          {
            clearInterval(inter);
            lowVol = false;

          }
        }, 100)
      }
  };

    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter3 .slide');
    const pagination = document.querySelector('.chapter3 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 4 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter3MissionbuttonSlide--left');
        const right = document.querySelector('.chapter3MissionbuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/justice');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/enemis');
        });
      }, 500)
  }
}
</script>
