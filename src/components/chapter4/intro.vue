<template>
  <div class="chapterIntro">
    <img src="/static/img/drone/drone4.jpg" alt="#" class="chapterIntro--bg">
    <svg width="106px" height="106px" viewBox="0 0 106 106" version="1.1">
        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="chapitre-1" transform="translate(-667.000000, -291.000000)">
                <g id="Group-3" transform="translate(393.000000, 233.000000)">
                    <g id="Group-2" transform="translate(276.000000, 0.000000)">
                        <g id="Group" transform="translate(0.000000, 60.000000)">
                            <circle id="Oval-2" class="chapterIntro--number" stroke="#FFD031" stroke-width="4" cx="51" cy="51" r="51"></circle>
                            <text id="1" font-family="AvenirNext-Heavy, Avenir Next" font-size="48" font-weight="600" fill="#FFFFFF">
                                <tspan x="34.2" y="66">4</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  <h1 class="chapterIntro--title">ET SI LE DRONE NOUS ÉCHAPPAIT ?</h1>
  <div class="chapterIntro--border"></div>
  <p class="chapterIntro--txt">Arme du présent et du futur, le drône peut-il échapper au contrôle des États ? Perdraient-ils le "monopole de la violence" ?</p>
  <div class="buttonSlide">
    <img src="/static/img/left.svg" alt="#" class="chapterIntrobuttonSlide--left buttonSlide--button">
    <img src="/static/img/right.svg" alt="#" class="chapterIntrobuttonSlide--right buttonSlide--button">
  </div>
  </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapterIntro', '/chapitre4/terrorisme', '/chapitre3/a-vous', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)
    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter4 .slide');
    const pagination = document.querySelector('.chapter4 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 0 * number;
    pagination.style.marginLeft =  theMargin + "%";
    setTimeout(function ()
      {
        const left = document.querySelector('.chapterIntrobuttonSlide--left');
        const right = document.querySelector('.chapterIntrobuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre4/terrorisme');
          console.log('coucou')
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/a-vous');
        });
      }, 500)
  }
}
</script>
