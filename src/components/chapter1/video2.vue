<template>
  <div class="homeCons">
    <video src="/static/video/consequences.mp4" autoplay class="homeCons--video"></video>
    <p class="homeCons--txt">Au milieu du 20 ème siècle, il fallait des mois de reconnaissances aériennes et de traitement d’informations pour identifier et poser des objectifs. De plus, des centaines d’avions étaient nécessaires pour atteindre ces objectifs. Il fallait des avions pour la reconnaissance et des avions pour les attaques. Aujourd’hui, tout ces étapes peuvent être réalisés en 10 minutes avec des drones comme le Predator ou le Reaper.</p>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="homeConsbuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="homeConsbuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.homeCons', '/chapitre2/', '/chapitre1/comparaison', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".homeCons--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre2/');
        }, 500)
        var vol = document.getElementById("chap1audio");
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
      var vol = document.getElementById("chap1audio");
      var currentvol = vol.volume;
      var lowVol = true;
      if(lowVol === true)
      {
        var inter = setInterval(function ()
        {
          if(vol.volume > 0.2)
          {
            vol.volume -= 0.1;
          }
          else
          {
            clearInterval(inter);
            lowVol = false;

          }
        }, 100)
      }
    };

    setTimeout(function ()
    {
      const left = document.querySelector('.homeConsbuttonSlide--left');
      const right = document.querySelector('.homeConsbuttonSlide--right');

      right.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre2/');
      });
      left.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre1/comparaison');
      });
    }, 500)

    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter1 .slide');
    const pagination = document.querySelector('.chapter1 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 5 * number;
    pagination.style.marginLeft =  theMargin + "%";
  }
}
</script>
