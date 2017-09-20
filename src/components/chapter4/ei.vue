<template>
  <div class="chapter4Terro">
    <video src="/static/video/ei.mp4" autoplay class="chapter4Terro--video"></video>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter4TerrobuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter4TerrobuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter4Terro', '/chapitre4/securite', '/chapitre4/', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter4Terro--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre4/fin');
        }, 500)
    };
    aud.onplaying = function() {
      var vol = document.getElementById("chap4audio");
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
    const current = document.querySelector('.chapter4 .slide');
    const pagination = document.querySelector('.chapter4 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 1 * number;
    pagination.style.marginLeft =  theMargin + "%";
    setTimeout(function ()
      {
        const left = document.querySelector('.chapter4TerrobuttonSlide--left');
        const right = document.querySelector('.chapter4TerrobuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/securite');
          console.log('coucou')
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/');
        });
      }, 500)
  }
}
</script>
