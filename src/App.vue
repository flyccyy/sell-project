<!--eslint-disable -->
<template>
  <div id="app">
    <!-- <router-view/> -->
    <headers :seller="seller"></headers>
    <div class="tab border-1px-base">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
/*eslint-disable */
import headers from './components/header'
const ERR_OK = 0;  //有多个地方使用到，可以定义变量
export default {
  name: 'App',
  components:{
    headers
  },
  data(){
    return {
      seller:{}
    }
  },
  created(){
    // 相当于this.$axios，$http是vue-resource的一个实例
    this.$http.get('/api/seller').then((response)=>{
      response = response.body; //拿到json对象
      if(response.errno === ERR_OK) {
        this.seller=response.data;
        console.log(this.seller)
      }

    })
  }
}
</script>

<style lang="less">
@import 'common/less/mixin.less'; /*不能用@下的路径 */
  .tab {
    display: flex;
    width:100%;
    height:40px;
    line-height: 40px;
    .border-1px(rgba(7,17,27,0.1));
    .tab-item {
      flex:1;
      text-align: center;
      & > a{
        display: block;
        font-size: 14px;
        color:rgb(77,85,93);
        &.active {    /*在router中配置默认为active, linkActiveClass:'active' */
          color:rgb(240,20,20);
        }
        // &.router-link-active {    /*router-link-active */
        //   color:rgb(240,20,20);
        // }
      }
    }
  }

</style>
