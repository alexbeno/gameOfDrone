<template>
  <div class="chapter2Guerre">
    <img src="/static/img/drone/drone6.jpg" alt="#" class="chapterIntro--bg">
    <h1 class="chapter2Guerre--title">Guerre ou assassinats ?</h1>
    <p class="chapter2Guerre--txt">Si les opérateurs portent le feu à des milliers de kilomètres en restant dans leurs poste de commande dans un préfabriqué. Sont-ils encore soldats, des bourreaux, ou assassins ?
  La question se pose pour les opérateurs, la moitié d’entre sont affectés par un syndrome. Les questions du cadre légal et opérationnel se posent aussi.. Comment justifier des frappes basées sur des faisceaux de probabilité ? Ne serait-on pas, aussi, en train d’alimenter le nombre de nos ennemis ?</p>
    <div class="buttonSlide">
      <img src="/static/img/left.svg" alt="#" class="chapter2GuerrebuttonSlide--left buttonSlide--button">
      <img src="/static/img/right.svg" alt="#" class="chapter2GuerrebuttonSlide--right buttonSlide--button">
    </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter2Guerre', '/chapitre3/', '/chapitre2/opposition', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)
    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter1 .slide');
    const pagination = document.querySelector('.chapter1 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 4 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter2GuerrebuttonSlide--left');
        const right = document.querySelector('.chapter2GuerrebuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre2/opposition');
        });
      }, 500)
      var vol = document.getElementById("chap2audio");
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
