<template>
  <div class="container">
    <div class="header">
      <div class="title-left">
        <img src="@/assets/img/left.png" alt=""/>
        <img src="@/assets/img/vector.png" alt=""/>
        <span>{{nowTime}}</span>
    </div>
    <div class="title-center">
      <img src="@/assets/img/title.png" alt=""/>
      <img src="@/assets/img/side.png" alt=""/>
      <img src="@/assets/img/lignt.png" alt=""/>
      <span>欠薪平台综合管理平台</span>
    </div>
    <div class="title-right">
      <img src="@/assets/img/right.png" alt=""/>
      <img src="@/assets/img/route.png" alt="">
      <img src="@/assets/img/route2.png" alt="">
      <img src="@/assets/img/route3.png" alt="">
      <span>赣州蓉江新区综合执法大队</span>
    </div>
    </div>
    <div class="content">
      <div class="content-left">
        <div>线索统计</div>
        <div class="left-t">
          <div class="rectangle-top">
              <h3>线索数量</h3>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/route4.png" alt="">
                <div>
                  <div>工程建设领域</div>
                  <span>25686条</span>
                </div>
              </div>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/vector2.png" alt="">
                <div>
                  <div>非工程建设领域</div>
                  <span>25686条</span>
                </div>
              </div>
              <div class="rectangle-top-last">
                <div>本月新增线索：5221条</div>
                <div>较上月比：
                  <img src="@/assets/img/intersect.png" alt="">
                  2%</div>
              </div>
              <div class="rectangle-top-echarts">
                <img src="@/assets/img/ellipse3.png" alt="">
                <div style="width:100%;height:100%" id="echarts1"></div>
              </div>
          </div>
          <div class="rectangle-middle">
            <h3>涉及人数</h3>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/vector2.png" alt="">
                <div>
                  <div>涉及总人数</div>
                  <span>25686人</span>
                </div>
              </div>
              <div  class="rectangle-top-last">
                <div>本月新增人数：5221人</div>
                <div>较上月比：
                  <img src="@/assets/img/intersect.png" alt="">
                  2%</div>
              </div>
              <div class="rectangle-middle-echarts">
                <div style="width:100%;height:100%" id="echarts2"></div>
              </div>
          </div>
          <div class="rectangle-bottom">
            <h3>涉及金额</h3>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/route5.png" alt="">
                <div>
                  <div>涉及总金额</div>
                  <span>25686人</span>
                </div>
              </div>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/route4.png" alt="">
                <div>
                  <div>工程建设领域</div>
                  <span>25686条</span>
                </div>
              </div>
              <div class="rectangle-top-div">
                <img src="@/assets/img/rectangle6.png" alt="">
                <img src="@/assets/img/rectangle7.png" alt="">
                <img src="@/assets/img/vector2.png" alt="">
                <div>
                  <div>非工程建设领域</div>
                  <span>25686条</span>
                </div>
              </div>
              <div class="rectangle-bottom-echarts">
                <div style="width:100%;height:100%" id="echarts3"></div>
              </div>
          </div>
        </div>
      </div>
      <div  class="content-right">
        <div  class="content-right-top">
          <div class="content-right-top-div">
            <div>案件办结率</div>
            <div>95<span>%</span></div>
            <div>
              <img src="" alt="">
            </div>
          </div>
         
        </div>
        <div  class="content-right-bottom-top">
          <div>线索上报趋势</div>
        </div>
        <div  class="content-right-bottom">
          <div id="echarts4" style="width:100%;height:100%"></div>
        </div>
      </div>

    </div>
    <div id="map">

    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import moment from 'moment'
import {chart1,chart2,chart3,chart4} from '@/views/echarts/echarts'
export default {
  name: 'HomeView',
  components: {
  },
  data:()=>{
    return {
      nowTime:'',
      map:null,
    }
  },
  mounted(){
    this.getNowTime();//进入页面调用该方法获取当前时间
        clearInterval(myTimeDisplay );//销毁之前定时器
        var myTimeDisplay = setInterval(() => {
           this.getNowTime(); //每秒更新一次时间
        }, 1000); 
        this.$nextTick(()=>{
          chart1()
          chart2() 
          chart3()
          chart4()
        })  
      this.initMap()
       
  },
  methods:{
    getNowTime(){
      this.nowTime =moment(new Date()).format('YYYY.MM.DD hh:mm:ss') 
    },
    initMap() {
      const that = this;
      AMapLoader.load({
        key: "8ede6988a3a58a39d1b605a9d0790642", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        that.map = new AMap.Map("map", {
          //设置地图容器id
          // viewMode: "3D", //是否为3D地图模式
          resizeEnable: true,
          zoom: 11, //初始化地图级别
          center: [114.933494, 25.831139], //初始化地图中心点位置
          mapStyle:"amap://styles/darkblue", //显示样式
        });
      })
    }
  }
}
</script>
<style lang="less" scoped>
@primary-color: #0E9CFF;
.container{
  height: 100vh;
  width: 100vw;
  position: relative;
  background-attachment: fixed;
  mix-blend-mode:multiply;/*混合模式：穿透*/
}
.header{
  display: flex;
  width:100%;
  height:65px;
  .title-left{
    width:658px;
  position: relative;
  img,span{position: absolute;}
  img:nth-child(1){
    left:0;
    height:100%;
    width:658px;
    top:-2px;
  }
  img:nth-child(2){
    left:1.25rem;
    top:10px;
    height:20px;
    width:20px;
  }
  span{
    left:50px;
    top:10px;
    color:#fff;
  }

}
.title-center{
  position: relative;
  width:690px;
  img,span{position: absolute;}
  img:nth-child(1){
    top:-15px;
    left:-46px;
  }
  img:nth-child(2){
    top:0px;
    left:-14px;
  }
  span{
    top:50%;left:50%;transform: translate(-50%,-50%);
    font-size: 30px;
    color:#fff
  }
}
.title-right{
  position: relative;
  width:663px;
  img,span{position: absolute;}
  img:nth-child(1){top:-2px;left:-37px;z-index: -1;width:663px}
  img:nth-child(2){
    right:210px;
    top:12px;
    width:19px;
    height:19px;
  }
  img:nth-child(3){
    top:21px;
    right:212px;
  }
  img:nth-child(4){
    top:15px;
    right:216px;
  }
  span{
    color:#fff;
    top:10px;
    right:10px;
  }
}
}
.content{
  .content-left{
    &>div:nth-child(1){
      position: absolute;
      width: 189px;
      height: 51px;
      left: 21px;
      background: url('@/assets/img/rectangle.png') no-repeat;
      background-size: cover;
      text-align: center;
      line-height: 51px;
      color:@primary-color;    
    }
    .left-t:nth-child(2){
      position: absolute;
      left:21px;
      top:110px;
      height: 913.81px;
      width: 409.7px;
      background: url('@/assets/img/rectangle2.png') no-repeat;
      background-size: 100% 100%;
      padding-left: 16px;
      padding-top: 32px;
      box-sizing: border-box;
      .rectangle-top,.rectangle-middle{
        margin-bottom:18px;
      }
      .rectangle-top,.rectangle-middle,.rectangle-bottom{
        box-sizing: border-box;
        padding:18px 17px
      }
      .rectangle-top,.rectangle-middle,.rectangle-bottom{
        width: 379.73px;
        height: 213.24px;
        background:url('@/assets/img/rectangle3.png') no-repeat;
        background-size: 100% 100%;
        h3{
          color:#01C2FF;
          margin:0;
          margin-bottom: 10px;          
        }
        &>div:nth-child(3){
          top:50px;
        }
        .rectangle-top-div{
          position: relative;
          &>img{
            position: absolute;
          }
          &>img:nth-child(2){
            top:2px;
            left:2px;
          }
          &>img:nth-child(3){
            top:5px;
            left:5px;
          }
          &>div:last-child{
            position: absolute;
            color:#fff;
            font-size: 13px;
            left:50px;
            span{
              color:@primary-color;
              font-weight: bold;
            }
          }
        }
        .rectangle-top-last{
          position: relative;
          top:100px;
          width: 154px;
          height: 45px;
          font-size: 14px;
          text-align: center;
          color:@primary-color;
          background: url('@/assets/img/rectangle8.png') no-repeat;
          background-size: 100% 100%;
        }
       .rectangle-top-echarts{
        width: 154px;
        height: 200px;
        position: absolute;
        right:30px;
        top:30px;
        img{
          position: absolute;
          top:22px;
          width:154px;
        }
       }
      }
      .rectangle-middle{
        width: 379.73px;
        height: 392.6px;
        background:url('@/assets/img/rectangle4.png') no-repeat; 
        background-size: 100% 100%;
        .rectangle-middle-echarts{
          width:379px;
          height:300px;
        }
      }
      .rectangle-bottom{
        width: 379.73px;
        height: 213.24px;
        position: relative;
        background:url('@/assets/img/rectangle5.png') no-repeat;
        background-size: 100% 100%;
        div.rectangle-top-div:nth-child(4){
          top:100px;
        }
        .rectangle-bottom-echarts{
          position: absolute;
          width:230px;
          height:200px;
          right:0px;
          top:0px;
        }
      }
    }
  }
  .content-right{
    .content-right-top{
      position: absolute;
      left:480px;
      top:110px;
      .content-right-top-div{
        width: 210px;
        height: 110px;
        padding:21px 17px;
        background: url('@/assets/img/rectangle10.png') no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        div:nth-child(1){
          color:#A8D6FF;
          font-size: 14px;
          margin-bottom:10px;
        }
        div:nth-child(2){
          color:@primary-color;
          font-size: 36px;
          span{font-size: 18px;padding-left:20px;}
        }

      }
    }
    .content-right-bottom-top{
      position: absolute;
      width: 189px;
      height: 51px; 
      left:445px;
      bottom:120px;
      background: url('@/assets/img/rectangle.png') no-repeat;
      background-size: cover;
      text-align: center;
      line-height: 51px;
      color:@primary-color;    
    }
    .content-right-bottom{
      position: absolute;
      right: 17px;
      bottom: -90px;
      height: 212.81px;
      width: 1459px;
      background: url('@/assets/img/rectangle9.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
//地图
#map{
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-10
}
</style>
