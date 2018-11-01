<template>
  <div>
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-header title="Myron Avatar" sub-title="sub title">
          <mu-avatar slot="avatar">
            <img :src="userIcon">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media title="Image Title" sub-title="Image Sub Title">
          <img src="https://muse-ui.org/img/sun.a646a52d.jpg">
        </mu-card-media>
        <mu-card-title title="contentList.title" sub-title="play()" data-name="contentList.loginname"></mu-card-title>
        <mu-card-text v-html="contentList.content">
        </mu-card-text>
        <mu-card-actions>
          <mu-button flat>Action 1</mu-button>
          <mu-button flat>Action 2</mu-button>
        </mu-card-actions>
      </mu-card>
  </div>
</template>

<script>
    export default {
        name: "music-play",
        data(){
          return{
            id:this.$route.params.id,
            contentList:{},
            userIcon:''
          }
        },created(){
          // console.log(this.id)
          this.getData()
      },
      methods:{
        getData(){
          this.$axios.get('api/v1/topic/' + this.id, null, res => {
            this.contentList = res.data
            this.userIcon = res.data.author.avatar_url
          })
        }
      }
    }
</script>

<style scoped>

</style>
