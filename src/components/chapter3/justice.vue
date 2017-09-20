<template>
  <div class="chapter3Justice">
    <video src="/static/video/microtroittoir.mp4" autoplay class="chapter3Justice--video"></video>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter3JusticebuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter3JusticebuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter3Justice', '/chapitre3/a-vous', '/chapitre3/missions', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter3Justice--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre3/a-vous');
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
    const theMargin = 5 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter3JusticebuttonSlide--left');
        const right = document.querySelector('.chapter3JusticebuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/a-vous');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/missions');
        });
      }, 500)
  }
}
</script>
