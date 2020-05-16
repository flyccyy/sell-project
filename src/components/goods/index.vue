<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goodsList" :key="index" class="menu-item">
          <span class="text border-1px-base">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div> 
  </div>
</template>

<script>
const ERR_OK = 0;
export default {
  props:['seller'],
  data(){
    return {
      goodsList:[],
      classMap:[]
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
    this.$http.get('/api/goods').then((response)=>{
      response = response.body;
      if(response.errno === ERR_OK) {
        this.goodsList = response.data;
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/mixin.less";
  .goods {
    // 即定死了视口高度，无滚动条，超出隐藏
    display: flex;
    position: absolute;
    top:174px;
    bottom:46px;
    width:100%;
    overflow: hidden;
    .menu-wrapper {
      width:80px;
      background: #f3f5f7;
      .menu-item {
        display: table;
        height:54px;
        width:56px;
        margin:0 auto;
        line-height: 14px;
        .icon {
          display: inline-block;
          width:12px;
          height:12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease {
            .bg-image('decrease_3');
          }
          &.discount {
            .bg-image('discount_3');
          }
          &.guarantee {
            .bg-image('guarantee_3');
          }
          &.invoice {
            .bg-image('invoice_3');
          }
          &.special {
            .bg-image('special_3');
          }
        }
        .text {
          display: table-cell;
          width:56px;
          .border-1px(rgba(7,17,27,.1));
          vertical-align: middle;
          font-size: 12px;
        }
      }
      // flex:0 0 80px;
    }
    .foods-wrapper {
      flex:1;

    }
  }
</style>