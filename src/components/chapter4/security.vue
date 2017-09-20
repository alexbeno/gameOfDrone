<template>
  <div class="chapter4Security">
    <video src="/static/video/security.mp4" autoplay class="chapter4Security--video"></video>
    <p class="chapter4Security--txt">Un drône civil détourné de son usage premier, représente une menace importante. Mais imaginons qu’un drone armé, doté de grande capacité soit détourné. Il pourrait être détourné par son utilisateur (vidéo si on a le tps), qui est rarement contrôlé. Mais il pourrait aussi être détourné par un hackeur, qui aurait su prendre son contrôle.
Intrinsèquement, le drone est piloté à distance, grâce à des commandes numériques.  Et si Daesh, où son successeur numérique détournait nos drones ?
</p>
<div class="buttonSlide">
  <img src="/static/img/left.svg" alt="#" class="chapter4SecuritybuttonSlide--left buttonSlide--button">
  <img src="/static/img/right.svg" alt="#" class="chapter4SecuritybuttonSlide--right buttonSlide--button">
</div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter4Security', '/chapitre4/fin', '/chapitre4/terrorisme', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter4Security--video");
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
    const theMargin = 2 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter4SecuritybuttonSlide--left');
        const right = document.querySelector('.chapter4SecuritybuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/fin');
          console.log('coucou')
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/terrorisme');
        });
      }, 500)
  }
}
</script>
