
<!-- Template parts -->
<template>
  <div class="chapter1">
    <router-view></router-view>
    <slide divider="20"></slide>
    <audio src="/static/sound/chapitre2.mp3" loop autoplay id="chap2audio"></audio>
    <img src="/static/img/sound.svg" alt="" v-on:click="mute" class="chap2mute muteButton">
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
        var muted = document.getElementById("chap2audio");
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
    },
  }
</script>
<style src="../chapter2/app.scss" lang="scss"></style>
