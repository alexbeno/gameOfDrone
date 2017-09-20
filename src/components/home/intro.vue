<template>
  <div class="homeIntro">
    <video src="/static/video/GOD.mp4" autoplay class="homeIntro--video"></video>
    <img class="homeIntro--img" src="/static/img/drone/drone8.jpg" alt="#">
    <div class="homeIntro--svg">
    </div>
    <div class="homeIntro--txt">
      <h1 class="homeIntro--txt--content">GAME OF DRONES</h1>
    </div>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="homeIntrobuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="homeIntrobuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>
import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {
    const Scrolling = new ScrollingEvent('.homeIntro', '/chapitre1/', '/', 500)
    Scrolling.singlGoTo(-1, '/chapitre1/','end', 'homeaudio');
    Scrolling.enter();
    // pagination
    const current = document.querySelector('.home .slide');
    const pagination = document.querySelector('.home .slide--content--current');
    const number = current.getAttribute("data-margin");
    const theMargin = 0 * number;
    pagination.style.marginLeft =  theMargin + "%";

    var aud = document.querySelector(".homeIntro--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre1/');
        }, 500)

        var vol = document.getElementById("homeaudio");
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


    setTimeout(function ()
    {
      const left = document.querySelector('.homeIntrobuttonSlide--left');
      const right = document.querySelector('.homeIntrobuttonSlide--right');

      right.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre1/');
      });
    }, 500)
  },
}
</script>
