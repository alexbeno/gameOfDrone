<template>
  <div class="chapter2Opp">
    <div class="chapter2Opp--first">
      <div class="chapter2Opp--first--txt">  Le pilote de drone n'est finalement que le fer de lance d'une action juste. Certes il tue mais il le fait en soldat et en respectant le droit de la guerre.</div>
      <div class="chapter2Opp--first--video"><video src="/static/video/pour.mp4" autoplay class="chapter2Opp--first--video--content vid1"></video></div>
      <div class="chapter2Opp--first--trans"></div>
    </div>
    <div class="chapter2Opp--second">
      <div class="chapter2Opp--second--video"><video src="/static/video/contre.mp4" class="chapter2Opp--second--video--content vid2"></video></div>
      <div class="chapter2Opp--second--txt"> L'utilisation massive de drônes annihile tout contrôle. D'autant plus que la quête de l'élimination de toute source de menace. Le soldat est devenu le bourreau pour des exécutions extra-judiciaires. </div>
      <div class="chapter2Opp--second--trans"></div>
    </div>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter2OppbuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter2OppbuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter2Opp', '/chapitre2/guerre', '/chapitre2/changement', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".vid1");
    var aud2 = document.querySelector(".vid2");
      aud.onended = function() {
        aud2.play();
      };
      aud2.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre2/guerre');
        }, 500)
        var vol = document.getElementById("chap2audio");
        var currentvol = vol.volume;
        var lowVol = true;
        if(lowVol === true)
        {
          var inter = setInterval(function ()
          {
            if(vol.volume > 0.1)
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
      aud.onplaying = function() {
        var vol = document.getElementById("chap2audio");
        var currentvol = vol.volume;
        var lowVol = true;
        if(lowVol === true)
        {
          var inter = setInterval(function ()
          {
            if(vol.volume > 0.3)
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
    const current = document.querySelector('.chapter1 .slide');
    const pagination = document.querySelector('.chapter1 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 3 * number;
    pagination.style.marginLeft =  theMargin + "%";
  setTimeout(function ()
    {
      const left = document.querySelector('.chapter2OppbuttonSlide--left');
      const right = document.querySelector('.chapter2OppbuttonSlide--right');

      right.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre2/guerre');
      });
      left.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre2/changement');
      });
    }, 500)
  }
}
</script>
