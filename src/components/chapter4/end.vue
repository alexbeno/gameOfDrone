<template>
  <div class="chapterEnd">
    <img src="/static/img/drone/drone8.jpg" alt="#" class="chapterIntro--bg">
    <p class="chapterEnd--txt"> L'utilisation de drones armés a suscité un débat soulevant des interrogations juridiques, notamment lors d'interventions des États-Unis au Pakistan ou encore au Yémen. Il existe en effet dans certains cas des doutes sérieux sur le respect du cadre fixé par le droit international : frappes menées par les services de renseignement, invocation d'une légitime défense comprise de manière très extensive, attaques en dehors des zones de conflit armé.</p>
    <a href="#" v-on:click="link" class="chapterEnd--button">REVENIR AU DÉBUT</a>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapterEnd', '/chapitre4/', '/chapitre4/securite', 500)
    setTimeout(function ()
    {
      Scrolling.singlGoTo(1, '/chapitre4/terrorisme');
    }, 1500)

    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter4 .slide');
    const pagination = document.querySelector('.chapter4 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 3 * number;
    pagination.style.marginLeft =  theMargin + "%";
    var vol = document.getElementById("chap4audio");
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
  },
  methods: {
    link: function (event) {
      event.preventDefault();
      const Scrolling = new ScrollingEvent('.chapterEnd', '/chapitre4/', '/chapitre4/terrorisme', 500)
      Scrolling.anime(-1, '/');
    }
  }
}
</script>
