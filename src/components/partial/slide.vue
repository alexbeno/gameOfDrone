<script>
import Vue from 'vue'
Vue.component('slide', {
props: ['divider'],
  template: `
  <div class="slide" :data-slide="divider">
    <div class="slide--content">
      <div class="slide--content--current"></div>
    </div>
  </div>
  `,
})
</script>
