<template>
  <div class="chapter2Video1">
    <video src="/static/video/dejavu.mp4" autoplay class="chapter2Video1--video"></video>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter2Video2buttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter2Video2buttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter2Video1', '/chapitre2/opposition', '/chapitre2/paradigme', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)

    var aud = document.querySelector(".chapter2Video1--video");
      aud.onended = function() {
        setTimeout(function ()
        {
            Scrolling.anime(-1, '/chapitre2/opposition');
        }, 500)
    };

    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter1 .slide');
    const pagination = document.querySelector('.chapter1 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 2 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
    {
      const left = document.querySelector('.chapter2Video2buttonSlide--left');
      const right = document.querySelector('.chapter2Video2buttonSlide--right');

      right.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre2/opposition');
      });
      left.addEventListener('click', function(){
        Scrolling.anime(-1, '/chapitre2/paradigme');
      });
    }, 500)
  }
}
</script>
