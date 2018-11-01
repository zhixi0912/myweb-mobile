<template>
  <!--<wxLogin :appid="appid"></wxLogin>-->
</template>

<script>
    export default {
      name: "wx-login",
      data(){
        return{
          userInfo:[],
          openid:'',
          appid:this.appid,
        }
      },
      props:{
        appid:{
          type:String,   //key不能乱写
          // default:''
        }
      },
      methods: {
        openid(){
          var sessionopenid = sessionStorage.getItem('openid')
          var sessionuserInfo = sessionStorage.getItem('userInfo')
          sessionuserInfo = JSON.parse(sessionuserInfo)
          this.openid = sessionopenid;
          this.userInfo = sessionuserInfo;
          console.log("读取openid缓存",sessionopenid)
          console.log("读取userInfo缓存",sessionuserInfo)
          console.log("读取openid缓存判断",!sessionopenid)
          if(!sessionopenid) { //读取openid缓存，
            //如果没有openid缓存，判断用户是否授权【授权后链接中会返回code】
            var code= this.getQueryString('code')
            if(code =="" ||code == null) {  //判断没有授权，弹出授权窗口继续引导用户授权
              let url = window.location.href; //获取当前页面地址
              url = this.UrlEncode(url);  //url转码
              // let appid = 'wx70d81a9c5ab24ac3'; //appid
              let appid = this.appid;
              let scope = 'snsapi_userinfo'; //弹出授权页面
              window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + url + "&response_type=code&scope=" + scope + "&state=playid=" + playid + "#wechat_redirect"

            }else {  //如果 已经授权，直接向后台发送code请求用户信息
              var zipFormData = new FormData();
              zipFormData.append('code',code);
              zipFormData.append('gettype','userinfo');
              //向后台请求openid和用户信息
              this.$axios.post('getOpenid/module/weixin/key/dac509bd90a82719a3569291e12c24a6f1af4bac',zipFormData, res => {
                console.log("接口返回的res",res);
                this.userInfo = res;
                this.openid   = res.openid;
                var userInfo = JSON.stringify(res); //将用户信息对象处理成json后存入缓存
                var openid = res.openid;
                sessionStorage.setItem('userInfo',userInfo);
                sessionStorage.setItem('openid',openid);

                var openiddd = sessionStorage.getItem('openid');
                console.log("第一次读取openid缓存",openiddd);
                var userInfo = sessionStorage.getItem('userInfo');
                console.log("第一次读取userInfo缓存",userInfo);

              })
            }
          }else {
              //如果缓存中有sessionopenid，刚说明已经授权，直接使用缓存中sessionopenid进行业务逻辑就可以
          }
        },
        UrlEncode(str) { //UrlEncode转码
          str = (str + '').toString();
          return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
        },
        getQueryString(name) {  //根据传入的参数使用正则匹配链接中的参数结果并返回
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
          var r = window.location.search.substr(1).match(reg);
          var q = window.location.pathname.substr(1).match(reg_rewrite);
          if(r != null){
            return unescape(r[2]);
          }else if(q != null){
            return unescape(q[2]);
          }else{
            return null;
          }
        }
      },
      mounted:function(){
        console.log("加载前。。。");
        this.openid();
      },

    }
</script>

<style scoped>

</style>
