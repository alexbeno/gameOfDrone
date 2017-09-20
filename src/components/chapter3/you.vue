<template>
  <div class="chapterYou">
    <img src="/static/img/drone/dron7.jpg" alt="#" class="chapterIntro--bg">
    <p class="chapterYou--txt">Malgré les nombreux avantages que procurent les drones, les questions d’éthiques et les dommages collatéraux les mettent au coeur de controverses, pensez vous que leur utilisation est justifiée ?</p>
    <social-sharing url="https://prod.alexisbenoliel.fr/" inline-template>
  <div>
    <network network="facebook">
        <a href="" class="chapterYou--button">PARTAGEZ VOTRE AVIS</a>
    </network>
  </div>
</social-sharing>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapterYoubuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapterYoubuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapterYou', '/chapitre4/', '/chapitre3/justice', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)
    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter3 .slide');
    const pagination = document.querySelector('.chapter3 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 6 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapterYoubuttonSlide--left');
        const right = document.querySelector('.chapterYoubuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/justice');
        });
      }, 500)
      var vol = document.getElementById("chap3audio");
      var currentvol = 0;
      var lowVol = true;
      if(lowVol === true)
      {
        var inter = setInterval(function ()
        {
          if(vol.volume < 0.9)
          {
            vol.volume += 0.2;
          }
          else
          {
            clearInterval(inter);
            lowVol = false;

          }
        }, 200)
      }
  }
}
</script>
