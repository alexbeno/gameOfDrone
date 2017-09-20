
<!-- Template parts -->
<template>
  <div class="home">
    <router-view></router-view>
    <slide divider="33"></slide>
    <audio src="/static/sound/chapitre4.mp3" autoplay id="homeaudio"></audio>
    <img src="/static/img/sound.svg" alt="" v-on:click="mute" class="homemute muteButton">
  </div>
</template>

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
        var muted = document.getElementById("homeaudio");
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
      const current = document.querySelector('.home .slide');
      const pagination = document.querySelector('.home .slide--content--current');
      const number = current.getAttribute("data-slide");
      const theWidth = number + "%";
      pagination.style.width =  theWidth;
    },
  }
</script>

<!-- Style parts -->
<style src="../home/app.scss" lang="scss"></style>
