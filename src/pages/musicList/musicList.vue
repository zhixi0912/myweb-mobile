<template>
  <div class="music-list">
    <!--<wxLogin></wxLogin>-->
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar color="lightBlue">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        musicList
        <mu-button icon slot="right">
          <mu-icon value="view_quilt"></mu-icon>
        </mu-button>
      </mu-appbar>
      <mu-list textline="two-line">



        <mu-list-item avatar button :ripple="false" v-for="(item, index)  in list" :key="index" :href="'#'+'/musicPlay/'+item.id" :data-id="'/musicPlay/'+item.mv_id">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="item.author.avatar_url">
              <!--<mu-icon value="grade"></mu-icon>-->
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
            <mu-list-item-sub-title>发布者：{{item.author.loginname}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-list-item-after-text>{{item.create_at}}</mu-list-item-after-text>
            <!--<mu-list-item-after-text>{{item.listennum}}</mu-list-item-after-text>-->
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>

    </mu-paper>


    <mu-carousel hide-controls>
      <mu-carousel-item v-for="(item, index)  in carouselImg" :key="index">
        <img :src="item.carouselImg">
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>

  // import wxLogin from './../../public/components/wxLogin/wxLogin.vue'
  export default {
    name: 'musicList',
    data () {
      return {
        list:[],
        selects: [
          1,
        ],
        carouselImg:[
          {carouselImg:'http://jx3.xoyo.com/m/2018/08/23/mobile/assets/images/play/shengcun.jpg'},
          {carouselImg:'http://jx3.xoyo.com/m/2018/08/23/mobile/assets/images/play/shengcun.jpg'},
          {carouselImg:'http://jx3.xoyo.com/m/2018/08/23/mobile/assets/images/play/shengcun.jpg'},
          {carouselImg:'http://jx3.xoyo.com/m/2018/08/23/mobile/assets/images/play/shengcun.jpg'},
        ],
      }
    },
    created () {
      this.toList()
    },
    methods:{
      toList(){
        this.$axios.get('api/v1/topics',null, res => {
          this.list = res.data;
        })
      }
    },
    components:{
      // 'wxLogin': wxLogin,
    },
  }
</script>

<style scoped>
  .hello img {
    max-width: 100%;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .demo-list-wrap {
    /*width: 100%;*/
    /*max-width: 360px;*/
    overflow: hidden;
  }
</style>
