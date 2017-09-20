<template>
  <div class="homeVideo">
    <video src="/static/video/arte.mp4" autoplay class="homeVideo--video"></video>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="homeVideobuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="homeVideobuttonSlide--right buttonSlide--button">
    </div>
  </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.homeVideo', '/chapitre1/data', '/chapitre1/le-drone', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".homeVideo--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre1/data');
        }, 500)
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
      const left = document.querySelector('.homeVideobuttonSlide--left');
      const right = document.querySelector('.homeVideobuttonSlide--right');

      right.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre1/data');
      });
      left.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre1/le-drone');
      });
    }, 500)

    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter1 .slide');
    const pagination = document.querySelector('.chapter1 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 2 * number;
    pagination.style.marginLeft =  theMargin + "%";
  }
}
</script>
