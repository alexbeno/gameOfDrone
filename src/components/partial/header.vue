<script>
import Vue from 'vue'
Vue.component('customNav', {
  props:['menuClass'],
  template:
  `
    <nav class="menu">
        <div class="closeNav">
          <img src="/static/img/close.svg" v-on:click="close" alt="#" class="closeNav--button">
          <div class="closeNav--social">
            <img src="/static/img/facebook.svg" alt="#" class="closeNav--social--item">
            <img src="/static/img/twitter.svg" alt="#" class="closeNav--social--item">
          </div>
        </div>
        <div v-for="link in links" class="menu--item">
          <img :src="link.image" alt="" class="menu--item--bg">
            <div class="menu--item--content">
              <div class="menu--item--content--number">
                <p class="menu--item--content--number--content">{{link.number}}</p>
              </div>
              <router-link :to="link.path" v-on:click.native="close">{{link.txt}}</router-link>
            </div>
          </div>
        </div>
    </nav>
  `,
  data () {
    return {
      links: [
        { path: '/chapitre1', txt: 'POURQUOI LES DRONES ?', image: '/static/img/drone/drone1.jpg', number: '1'},
        { path: '/chapitre2', txt: 'GUERRE À DISTANCE', image: '/static/img/drone/drone2.jpg', number: '2'},
        { path: '/chapitre3', txt: 'LA TERREUR DU BOURDON', image: '/static/img/drone/drone3.jpg', number: '3'},
        { path: '/chapitre4', txt: 'ET SI LE DRONE NOUS ÉCHAPPAIT ?', image: '/static/img/drone/drone4.jpg', number: '4'},
      ],
    }
  },
  methods: {
    close: function (event) {
      var menu = document.querySelector('.menu');
      menu.style.opacity="0";
      setTimeout(function ()
      {
        menu.style.display="none";
      }, 100)
    }
  }
})

</script>
