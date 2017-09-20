<template>
  <div class="chapter3Opponent">
    <img src="/static/img/guerre.jpg" alt="#" class="chapterIntro--bg">
    <h1 class="chapter3Opponent--title"><span>A</span>limente des nouveaux ennemis</h1>
    <div class="chapter3Opponent--container">
      <p class="chapter3Opponent--container--one">Les dommages collatéraux sont tels que les civils se demandent qui sont les véritables ennemis. La précision des frappes n’est pas parfaite, pour une cible touchée, on compte souvent de nombreuses victimes innocentes. Sans compter les dégâts physiques que causent ces bombardements (bâtiments, écoles, commerces..).</p>
      <div class="chapter3Opponent--container--border"></div>
      <div class="chapter3Opponent--container--two">
        <p class="chapter3Opponent--container--two--txt">En voulant défendre une population, les armées ne se mettent-elles pas à dos ces innocents ? Leurs vie valent-elles plus que celle d’une seule cible ?</p>
        <p class="chapter3Opponent--container--two--txt">Dès lors, de nombreux civils se révoltent contre leur propre armée afin de dénoncer cette arme d’un nouveau genre, qui semble semer plus de troubles que de paix. De nombreuses associations soutiennent également les civils touchés comme CODEPINK.</p>
      </div>
    </div>
    <div class="chapter3Opponent--svg">
        <svg width="1174px" height="376px" viewBox="0 0 1174 376" version="1.1" class="chapter3Opponent--svg--content" >
            <defs></defs>
            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="III)-exécutants-page-3" transform="translate(-133.000000, -564.000000)" stroke="#FFD031">
                    <g id="Group" transform="translate(98.000000, 518.000000)">
                        <path class="chapter3Opponent--svg--content--line" d="M36,421.070811 C174.744611,269.97506 370.077944,192.344599 622,188.17943 C873.922056,184.01426 1069.25539,261.64472 1208,421.070811" id="Path-2"></path>
                        <g class="chapter3Opponent--svg--content--plane" id="Layer_2-2" transform="translate(146.500000, 146.500000) rotate(65.000000) translate(-146.500000, -146.500000) translate(37.000000, 37.000000)">
                            <polygon id="Shape" points="0.286100659 108.732725 0.286100659 120.679017 103.99759 128.905506 103.783014 98.7178683"></polygon>
                            <polygon id="Shape_1_" points="218.223278 108.732725 218.223278 120.679017 114.583314 128.905506 114.79789 98.7178683"></polygon>
                            <path d="M106.787071,209.811238 C95.2715196,209.525099 92.0528871,208.237474 106.21487,207.736732 L106.787071,209.811238 Z" id="Shape_2_"></path>
                            <path d="M111.793833,209.811238 C123.309384,209.525099 126.528017,208.237474 112.366034,207.736732 L111.793833,209.811238 Z" id="Shape_3_"></path>
                            <path d="M109.218927,0.429208123 C109.218927,0.429208123 121.664305,6.00891372 118.231097,40.703237 C114.79789,75.3260256 115.08399,84.0532574 115.08399,93.8535096 C115.08399,103.653762 114.79789,168.607258 115.942292,181.054293 C117.086695,193.501329 111.722307,218.037727 109.218927,218.037727 L109.361977,218.037727 C106.858596,218.037727 101.494209,193.429794 102.638612,181.054293 C103.783014,168.607258 103.496914,103.653762 103.496914,93.8535096 C103.496914,84.0532574 103.783014,75.3260256 100.349806,40.703237 C96.9165984,6.08044841 109.361977,0.429208123 109.361977,0.429208123" id="Shape_4_" stroke-width="2"></path>
                            <polygon id="Shape_5_" stroke-width="3" points="106.21487 183.558007 106.21487 199.152569 80.9664866 201.227075 80.5373356 185.13177"></polygon>
                            <polygon id="Shape_6_" stroke-width="3" points="112.366034 183.558007 112.366034 199.152569 137.614417 201.227075 138.043568 185.13177"></polygon>
                            <polyline id="Shape_7_" stroke-width="2" points="117.444321 128.905506 117.444321 117.603026 215.290746 113.382479 215.934473 120.535948"></polyline>
                            <polyline id="Shape_8_" stroke-width="2" points="101.136583 128.905506 101.136583 117.603026 3.21863242 113.382479 2.6464311 120.535948"></polyline>
                            <path d="M165.366181,115.52852 L165.580757,124.828029" id="Shape_9_" stroke-width="3"></path>
                            <path d="M53.2147226,115.52852 L52.928622,124.899564" id="Shape_10_" stroke-width="3"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      </div>
      <div class="buttonSlide">
        <img src="/static/img/left.svg" alt="#" class="chapter3OpponentbuttonSlide--left buttonSlide--button">
        <img src="/static/img/right.svg" alt="#" class="chapter3OpponentbuttonSlide--right buttonSlide--button">
      </div>
    </div>
</template>

<script>

import ScrollingEvent from '@/components/global/js/scroll.js'
export default {
  name: 'chapter1-etape1',
  mounted: function () {

    const Scrolling = new ScrollingEvent('.chapter3Opponent', '/chapitre3/missions', '/chapitre3/les-chiffres', 500)
    setTimeout(function ()
    {
      Scrolling.goTo();
    }, 1500)


    Scrolling.enter();
    // pagination
    const current = document.querySelector('.chapter3 .slide');
    const pagination = document.querySelector('.chapter3 .slide--content--current');
    const number = current.getAttribute("data-slide");
    const theMargin = 3 * number;
    pagination.style.marginLeft =  theMargin + "%";

    setTimeout(function ()
      {
        const left = document.querySelector('.chapter3OpponentbuttonSlide--left');
        const right = document.querySelector('.chapter3OpponentbuttonSlide--right');

        right.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/missions');
        });
        left.addEventListener('click', function(){
          Scrolling.anime(-1, '/chapitre3/les-chiffres');
        });
      }, 500)
  }
}
</script>
