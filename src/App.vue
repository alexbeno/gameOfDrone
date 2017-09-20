<template>
  <div id="app">
    <div class="openNav">
      <img src="/static/img/menu.svg" v-on:click="open" alt="#" class="openNav--button">
      <div class="openNav--social">
        <img src="/static/img/facebook.svg" alt="#" class="openNav--social--item">
        <img src="/static/img/twitter.svg" alt="#" class="openNav--social--item">
      </div>
    </div>
    <img src="/static/img/scroll.svg" alt="" class="scrollingButton">
    <customNav class="mainNav"></customNav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/partial/header'
export default {
  name: 'app',
  methods: {
    open: function (event) {
      event.preventDefault();
      var menu = document.querySelector('.menu');
      menu.style.display="flex";
      setTimeout(function ()
      {
        menu.style.opacity="1";
      }, 100)
    },
  },
}

</script>
<style src="@/components/global/main.scss" lang="scss"></style>
