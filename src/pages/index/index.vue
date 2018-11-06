<template>
  <div class="main">
    <full-page :options="options" id="fullpage">
      <div class="section">
        <h3>Section 1</h3>
        <router-link :to="{ path: '/musicList' }">我是列表</router-link>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <!--<div class="slide">-->
          <!--<h3>Slide 2.2</h3>-->
        <!--</div>-->
        <!--<div class="slide">-->
          <!--<h3>Slide 2.3</h3>-->
        <!--</div>-->
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: {
          afterLoad: this.afterLoad,
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
      afterLoad () {
        console.log('After load')
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    margin: 0;
  }
</style>
