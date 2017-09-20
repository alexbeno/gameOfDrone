
<!-- Template parts -->
<template>
  <div class="chapter1">
    <audio src="/static/sound/chapitre1.mp3" loop autoplay id="chap1audio"></audio>
    <router-view></router-view>
    <slide divider="16.66"></slide>
    <img src="/static/img/sound.svg" alt="" v-on:click="mute" class="chap1mute muteButton">
  </div>
</template>


<!-- Script parts -->
<script>
  import slide from '@/components/partial/slide'
  export default {
    name: 'home',
    data(){
      return {
        isMuted: true
      }
    },
    methods: {
      mute: function (event) {
        var muted = document.getElementById("chap1audio");
        this.isMuted = !this.isMuted;
        if(this.isMuted === true)
        {
          muted.play();
        }
        else if(this.isMuted === false)
        {
          muted.pause();
        }
      }
    },
    mounted: function () {
      const current = document.querySelector('.chapter1 .slide');
      const pagination = document.querySelector('.chapter1 .slide--content--current');
      const number = current.getAttribute("data-slide");
      const theWidth = number + "%";
      pagination.style.width =  theWidth;
    },
    beformounted: function () {
        var vol = document.getElementById("chap1audio");
        var currentvol = 0;
        console.log('cocou')
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
  }
</script>
<style src="../chapter1/app.scss" lang="scss"></style>
