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
                <div class="rectangle-top-div-right">
                    <span>25686</span>
                    <div>涉及总人数</div>             
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
              <div class="content-right-top-div-div">
                <img src="@/assets/img/route6.png" alt=""/>
                <img src="@/assets/img/route7.png" alt=""/>
                <img src="@/assets/img/route8.png" alt=""/>
                <img src="@/assets/img/rectangle11.png" alt=""/>
                <img src="@/assets/img/rectangle12.png" alt=""/>
              </div>
            </div>
            <div class="content-right-top-div">
              <div>已办结数</div>
              <div>95<span>个</span></div>
              <div  class="content-right-top-div-div">
                <img src="@/assets/img/route6.png" alt=""/>
                <img src="@/assets/img/route7.png" alt=""/>
                <img src="@/assets/img/route8.png" alt=""/>
                <img src="@/assets/img/rectangle11.png" alt=""/>
                <img src="@/assets/img/rectangle12.png" alt=""/>
              </div>
            </div>
            <div class="content-right-top-div">
              <div>未办结数</div>
              <div>95<span>个</span></div>
              <div class="content-right-top-div-div">
                <img src="@/assets/img/route6.png" alt=""/>
                <img src="@/assets/img/route7.png" alt=""/>
                <img src="@/assets/img/route8.png" alt=""/>
                <img src="@/assets/img/rectangle11.png" alt=""/>
                <img src="@/assets/img/rectangle12.png" alt=""/>
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
      <div class="dialog">
        <div class="dialog-title">xxx项目</div>
        <ul class="dialog-ul">
          <li>
            <span>线索上报时间</span>
            <span>涉及人数</span>
            <span>涉及经额</span>
            <span>操作</span>
          </li>
          <li v-for="item of list" :key="item.id">
            <span>{{item.time}}</span>
            <span>{{item.number}}</span>
            <span>{{item.money}}</span>
            <span>查看</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import AMapLoader from "@amap/amap-jsapi-loader";
  import moment from 'moment'
  import {chart1,chart2,chart3,chart4} from '@/views/echarts/echarts'
  export default {
    name: 'Center',
    components: {
    },
    data:()=>{
      return {
        nowTime:'',
        map:null,
        lnglats: [
          [113.922282,35.332887],
          [113.963101,35.318516],
          [113.960801,35.306263],
          [114.933494, 25.831139]
        ],
        list:[
          {id:'01',time:'2022-06-06',number:10,money:1000},
          {id:'02',time:'2022-06-06',number:10,money:1000},
          {id:'03',time:'2022-06-06',number:10,money:1000},
        ]
      }
    },
    mounted(){
      this.getNowTime();//进入页面调用该方法获取当前时间
          clearInterval(myTimeDisplay );//销毁之前定时器
          var myTimeDisplay = setInterval(() => {
             this.getNowTime(); //每秒更新一次时间
          }, 1000); 
          this.$nextTick(()=>{
            const myChart1=chart1()
            const myChart2=chart2() 
            const myChart3=chart3()
            const myChart4=chart4()
            window.addEventListener('resize',()=>{
              myChart1.resize();
              myChart2.resize();
              myChart3.resize();
              myChart4.resize();
        })
          })  
        this.initMap()
         
    },
    methods:{
      getNowTime(){
        this.nowTime =moment(new Date()).format('YYYY.MM.DD hh:mm:ss') 
      },
      initMap() {//初始化地图
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
          this.getMark()
        })
      },
      getMark() {
        var startIcon = new AMap.Icon({
          // 图标尺寸
          size: new AMap.Size(49, 68),
          // 图标的取图地址
          image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png',
          // 图标所用图片大小
          imageSize: new AMap.Size(49,68),
      });
        var markers = [{
          icon: startIcon,
          position: [116.368904, 39.913423]
      }, {
          icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png',
          position: [116.368904,50.913423]
      }, {
          icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png',
          position: [116.305467, 80.807761]
      }];
        markers.forEach((marker)=> {
          new AMap.Marker({
              map: this.map,
              icon: marker.icon,
              position: [marker.position[0], marker.position[1]],
              offset: new AMap.Pixel(-13, -30)
          });
      });
      this.map.setFitView();
      }
    }
  }
  </script>
  <style lang="less" scoped>
.convert(@px, @width: 96px) {
  @rem: unit((@px / @width),rem);
}
//929/1080=0.86
.wleft(@px, @width: 96px) {
  @rem: unit((@px*0.86 / @width),rem);
}
  @primary-color: #0E9CFF;
  .container{
    // min-height: 1080px;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-attachment: fixed;
    mix-blend-mode:multiply;/*混合模式：穿透*/
    overflow: auto;
    font-size: .convert(20px)[@rem];
  }
  .header{
    display: flex;
    width:100%;
    height:.convert(65px)[@rem];
    .title-left{
      width:.convert(658px)[@rem];
    position: relative;
    img,span{position: absolute;}
    img:nth-child(1){
      left:0;
      height:100%;
      width:.convert(658px)[@rem];;
      top:.convert(-2px)[@rem];;
    }
    img:nth-child(2){
      left:.convert(24px)[@rem];
      top:.convert(27px)[@rem];
      height:.convert(20px)[@rem];
      width:.convert(20px)[@rem];
    }
    span{
      left:.convert(50px)[@rem];
      top:.convert(25px)[@rem];
      color:#fff;
    }
  
  }
  .title-center{
    position: relative;
    width:.convert(690px)[@rem];
    img,span{position: absolute;}
    img:nth-child(1){
      top:.convert(-15px)[@rem];
      left:.convert(-46px)[@rem];
    }
    img:nth-child(2){
      top:0px;
      left:.convert(-14px)[@rem];
    }
    span{
      top:50%;left:50%;transform: translate(-50%,-50%);
      font-size:.convert(30px)[@rem];
      display: inline-block;
      color:#fff
    }
  }
  .title-right{
    position: relative;
    width:.convert(663px)[@rem];
    img,span{position: absolute;}
    img:nth-child(1){top:.convert(-2px)[@rem];left:.convert(-37px)[@rem];z-index: -1;width:.convert(663px)[@rem];}
    img:nth-child(2){
      right:.convert(210px)[@rem];
      top:.convert(12px)[@rem];
      width:.convert(19px)[@rem];
      height:.convert(19px)[@rem];
    }
    img:nth-child(3){
      top:.convert(21px)[@rem];
      right:.convert(212px)[@rem];
    }
    img:nth-child(4){
      top:.convert(15px)[@rem];
      right:.convert(216px)[@rem];
    }
    span{
      color:#fff;
      top:.convert(10px)[@rem];
      right:.convert(10px)[@rem];
    }
  }
  }
  .content{
    .content-left{
      &>div:nth-child(1){
        position: absolute;
        width: .convert(189px)[@rem];
        height: .wleft(51px)[@rem];
        top:.wleft(95px)[@rem];
        left: .convert(19px)[@rem];
        background: url('@/assets/img/rectangle.png') no-repeat;
        background-size: cover;
        text-align: center;
        line-height:.wleft(51px)[@rem];
        color:@primary-color;    
      }
      .left-t:nth-child(2){
        position: absolute;
        left:.convert(19px)[@rem];
        top:.wleft(146px)[@rem];
        height: .wleft(913.81px)[@rem];
        width: .convert(409.7px)[@rem];
        background: url('@/assets/img/rectangle2.png') no-repeat;
        background-size: 100% 100%;
        padding-left:.convert(16px)[@rem];
        padding-top: .wleft(32px)[@rem];
        box-sizing: border-box;
        .rectangle-top,.rectangle-middle{
          margin-bottom:.wleft(18px)[@rem];
        }
        .rectangle-top,.rectangle-middle,.rectangle-bottom{
          box-sizing: border-box;
          padding:.wleft(18px)[@rem] .convert(17px)[@rem];
        }
        .rectangle-top,.rectangle-middle,.rectangle-bottom{
          width: .convert(379.73px)[@rem];
          height: .wleft(213.24px)[@rem];
          background:url('@/assets/img/rectangle3.png') no-repeat;
          background-size: 100% 100%;
          h3{
            color:#01C2FF;
            margin:0;
            margin-bottom: .wleft(10px)[@rem];         
          }
          &>div:nth-child(3){
            top:.wleft(50px)[@rem];
          }
          .rectangle-top-div{
            position: relative;
            &>img{
              position: absolute;
            }
            &>img:nth-child(2){
              top:.wleft(2px)[@rem];
              left:.convert(2px)[@rem];
            }
            &>img:nth-child(3){
              top:.wleft(5px)[@rem];
              left:.convert(5px)[@rem];
            }
            &>div:last-child{
              position: absolute;
              color:#fff;
              font-size: .wleft(13px)[@rem];
              left:.convert(50px)[@rem];
              span{
                color:@primary-color;
                font-weight: bold;
              }
            }
          }
          .rectangle-top-div-right{
            position: relative;
            top:.wleft(-90px)[@rem];right:0px;
            height: .wleft(166.6px)[@rem];
            div,span{position: absolute;}
            span{
              top:.wleft(53px)[@rem];right:.convert(38px)[@rem];
              color:#1890FF;font-size: .wleft(24px)[@rem];}
            div{
              top:.wleft(120px)[@rem];;right:.wleft(41.7px)[@rem];
              color:#fff;font-size:.wleft(12px)[@rem];}
          }
          .rectangle-top-last{
            position: relative;
            top:.wleft(100px)[@rem];
            width: .convert(154px)[@rem];
            height: .wleft(45px)[@rem];
            font-size: .wleft(14px)[@rem];
            text-align: center;
            color:@primary-color;
            background: url('@/assets/img/rectangle8.png') no-repeat;
            background-size: 100% 100%;
          }
         .rectangle-top-echarts{
          width: .convert(154px)[@rem];
          height: .wleft(200px)[@rem];
          position: absolute;
          right:.convert(30px)[@rem];
          top:.wleft(30px)[@rem];
          img{
            position: absolute;
            top:.wleft(22px)[@rem];
            width:.convert(154px)[@rem];
          }
         }
        }
        .rectangle-middle{
          width: .convert(379.73px)[@rem];
          height: .wleft(392.6px)[@rem];
          background:url('@/assets/img/rectangle4.png') no-repeat; 
          background-size: 100% 100%;
          .rectangle-middle-echarts{
            position: relative;
            top:.wleft(-130px)[@rem];
            left:.convert(-10px)[@rem];
            width:.convert(379px)[@rem];
            height:.wleft(300px)[@rem];
          }
        }
        .rectangle-bottom{
          width: .convert(379.73px)[@rem];
          height: .wleft(213.24px)[@rem];
          position: relative;
          background:url('@/assets/img/rectangle5.png') no-repeat;
          background-size: 100% 100%;
          div.rectangle-top-div:nth-child(4){
            top:.wleft(100px)[@rem];
          }
          .rectangle-bottom-echarts{
            position: absolute;
            width:.convert(230px)[@rem];
            height:.wleft(200px)[@rem];
            right:0px;
            top:0px;
          }
        }
      }
    }
    .content-right{
      .content-right-top{
        position: absolute;
        left:.convert(471px)[@rem];
        top:.convert(146px)[@rem];
        display: flex;
        .content-right-top-div{
          width: .convert(210px)[@rem];
          height: .convert(110px)[@rem];
          padding:.convert(21px)[@rem] .convert(17px)[@rem];
          margin-right:.convert(20px)[@rem];
          background: url('@/assets/img/rectangle10.png') no-repeat;
          background-size: 100% 100%;
          box-sizing: border-box;
          div:nth-child(1){
            color:#A8D6FF;
            font-size: .convert(14px)[@rem];
            margin-bottom:.convert(10px)[@rem];
          }
          div:nth-child(2){
            color:@primary-color;
            font-size: .convert(36px)[@rem];
            span{font-size: .convert(18px)[@rem];;padding-left:.convert(20px)[@rem];}
          }
          .content-right-top-div-div{
            position: absolute;
            left:.convert(110px)[@rem];
            width:.convert(110px)[@rem];
            height:100%;
            top:0px;
            img:nth-child(1){
              position: absolute;
              top:.convert(38px)[@rem];
              z-index: 10;
              right:.convert(53.86px)[@rem];
            }
            img:nth-child(2){
              position: absolute;
              top:.convert(30px)[@rem];
              right:.convert(45px)[@rem];
              z-index: 9;
            }
            img:nth-child(3){
              position: absolute;
              top:.convert(22px)[@rem];
              right: .convert(38px)[@rem];
              z-index: 8;
            }
            img:nth-child(4){
              position: absolute;
              top:.convert(57px)[@rem];
             right: .convert(23px)[@rem];
             z-index: 1;
            }
            img:nth-child(5){
              position: absolute;
              top:.convert(56px)[@rem];
             right: .convert(20px)[@rem];
             z-index: 0;
            }
  
          }
  
        }
      }
      .content-right-bottom-top{
        position: absolute;
        width: .convert(189px)[@rem];
        height: .convert(51px)[@rem];
        left:.convert(446px)[@rem];
        bottom:.convert(233px)[@rem];
        background: url('@/assets/img/rectangle.png') no-repeat;
        background-size: cover;
        text-align: center;
        line-height: .convert(51px)[@rem];
        color:@primary-color;    
      }
      .content-right-bottom{
        position: absolute;
        right: .convert(17.6px)[@rem];/*原本是19.8px 但是y轴的滚动条占了一定的宽度，所以设为了0, */
        bottom: .convert(23px)[@rem];
        height: .convert(212.81px)[@rem];
        width: .convert(1459px)[@rem];
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
  .dialog{
    position: absolute;
    z-index:10;
    top:.convert(363px)[@rem];
    left:.convert(769px)[@rem];
    width:.convert(460px)[@rem];
    height: .convert(279px)[@rem];
    background: url('@/assets/img/rectangle13.png') no-repeat;
      background-size: 100% 100%;
    .dialog-title{
      color:@primary-color;
      padding-left:.convert(40px)[@rem];
    }
    .dialog-ul{
    font-size: .convert(12px)[@rem];
    color: rgba(14, 156, 255, 0.8);
    li{list-style: none;
      width:.convert(424px)[@rem];
      box-sizing: border-box;
    }
    li span{
      display:inline-block;
      width:30%;
    }
    li:first-child{
      height:.convert(31px)[@rem];
      background: url('@/assets/img/vector3.png') no-repeat;
      background-size: 100% 100%;
      span{line-height: .convert(31px)[@rem];}
      margin-bottom:10px;
    }
    li span:last-child{width:10%}
    li:not(:nth-child(1)){
      height:.convert(14px)[@rem];
      line-height:.convert(14px)[@rem];
      font-size:.convert(10px)[@rem];
      padding:.convert(10px)[@rem] 0;
      box-sizing: border-box;
      &>span:nth-child(2){
       color: #FF9736;
      }
      &>span:last-child{
       color: #00F7FF;
      }
    }
  }
  }
  </style>
  