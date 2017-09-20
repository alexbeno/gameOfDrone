<template>
  <div class="chapter3Calv">
    <video src="/static/video/calvaire.mp4" autoplay class="chapter3Calv--video"></video>
    <p class="chapter3Calv--txt">Aujourd’hui, les drones sont devenus un véritable calvaire pour les populations de pays touchés. N’importe où et n’importe quand, un bombardement peut survenir et personne n’est à l’abri.</p>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter3CalvbuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter3CalvbuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter3Calv', '/chapitre3/les-chiffres', '/chapitre3/', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter3Calv--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre3/les-chiffres');
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
    const theMargin = 1 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter3CalvbuttonSlide--left');
        const right = document.querySelector('.chapter3CalvbuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/les-chiffres');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/');
        });
      }, 500)
  }
}
</script>
