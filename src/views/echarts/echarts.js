import * as echarts from 'echarts';
export  const chart1=()=>{
let arrx= [
    { value: 1048, name: '工程领域' },
    { value: 735, name: '非工程领域' },
  ]
const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'center',
    bottom:'0',
    width:154,
    itemHeight: 12,//图例图标的高度
    itemWidth:12,//图例图标的宽度
    padding:0,
    data:[
        {
            name:'工程领域',
            textStyle:{
                fontSize:12,
                color:'#fff'
            },
            icon:'image://./image/ellipse.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
        },
        {
            name:'非工程领域',
            textStyle:{
                fontSize:12,
                color:'#fff'
            },
            icon:'image://./image/ellipse2.png'
        }
    ],
  },
  series: [
    {
      name: '工程领域',
      type: 'pie',
      radius: ['64%', '85%'],
      label: {
            show: true,
            position: 'center', // 数值显示在内部
            formatter:[`{a|${arrx[0].value}}`,`{x|${arrx[1].value}}`].join('\n'),
            rich: {
                a: {
                    color: '#1890ff',
                    fontSize:26
                },
                x: {
                    color:'#F4A305',
                    fontSize:26
                }
            },
        },
        
      color:['#1890ff','#F4A305'],
      data:arrx
    }
  ]
};
let chartDom = document.getElementById('echarts1');
    if(chartDom){
    const myChart1 = echarts.init(chartDom);
    myChart1.setOption(option)
    return myChart1
    }
}
export const chart2=()=>{
const option = {
  legend: {
    data: ['新增人数'],
    top:'10%',
    right:'20%',
    textStyle:{
      color:'#0e9cff'
    },
    itemStyle:{
      opacity:0
    }
  },
  toolbox: {
    feature: {//自定义工具按钮
        myTool1: {
            show: true,
            title: '2022年',
            icon: 'path://./image/union.png',
            onclick: function (){
                alert('myToolHandler1')
            }
        },
        brush:{
          type:'lineY',
          title:'2022年'
        }
    }
},
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine:{
      symbol:'arrow',
      symbolOffset:[-15,15],
      symbolSize:[6,10],
      lineStyle:{
        color:'#019cff'
      }
    },
    data: ['6月', '7月', '8月', '9月', '10月']
  },
  yAxis: {
    type: 'value',
    name:'单位：人',
    splitLine:{show:false},
    axisTick:{
      show:true,
      lineStyle:{
        color:'#019cff',
      }
    },
    data:[20,50,100,400,800,1000]
  },
  series: [
    {
      data: [820, 932, 901, 934, 200, 300,500],
      type: 'line',
      smooth:true,
      name:'新增人数',
      areaStyle: {
        color:{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#0e9cff' // 0% 处的颜色
          }, {
              offset: 1, color:'rgba(91,233,255,0.00)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }
  ]
};
let chartDom = document.getElementById('echarts2');
    if(chartDom){
    const myChart2 = echarts.init(chartDom);
    myChart2.setOption(option)
    return myChart2
    }

}
export  const chart3=()=>{
  let arrx= [
      { value:1000, name: '工程领域' },
      { value: 2642, name: '非工程领域' },
    ]
  arrx[0].label={
    padding:[15,-160,15,-45]
  }
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      itemStyle:{opacity:0},
      textStyle:{opacity:0}
    },
    series: [
      {
        name: '领域',
        type: 'pie',
        roseType:'radius',
        radius: ['30%', '65%'],
        label: {
              show: true, // 数值显示在内部
              formatter: function(param){
                return '{b|'+param.data.name+'\n}'+'{d|'+param.percent.toFixed(1)+'% }'
              },
              padding:[15,-60,15,-80],
              rich: {
                b: {
                  fontSize:12,
                  color:'#fff',
                  lineHeight:30,
                },
                d: {
                  fontSize:16,
                  color:'#0e9cff',
                  fontWeight:'bold',             
                }
              },
          }, 
          labelLine: {
            show: true,//数据标签引导线
            length:20,
            length2: 40,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },    
        color:[{
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
              offset: 0, color: 'rgba(71,255,255,0.00)' // 0% 处的颜色
          }, {
              offset: 1, color: '#0e9cff' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
              offset: 0, color: 'rgba(75,165,255,0.00)' // 0% 处的颜色
          }, {
              offset: 1, color: '#3ccff9' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      ],
        data:arrx
      }
    ]
  };
  let chartDom = document.getElementById('echarts3');
      if(chartDom){
      const myChart3 = echarts.init(chartDom);
      myChart3.setOption(option)
      return myChart3
      }
  }
export const chart4=()=>{
 const option = {
    legend: {
      top:'2%',
      right:'5%',
      itemStyle:{
        opacity:0
      },
      data: [{
        name:'涉及金额',
        textStyle:{ color:'#23dc79',},
    },{name:'涉及人数', textStyle:{ color:'#0090f7',}}, {name:'欠薪数量', textStyle:{  color:'#5be9ff'}}]
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'rgba(91, 233, 255, 0.1)'
        }
      },
      data:[0,2000,4000,6000,8000,10000]
    },
    series: [
      {
        name: '涉及金额',
        type: 'line',
        smooth: true,
        lineStyle:{
          color:'#23dc79',
        },
        data: [9200, 1320, 7010, 1340, 9000, 2300, 2100,3300,8800,10000,6600,9900]
      },
      {
        name: '涉及人数',
        type: 'line',
        smooth: true,
        lineStyle:{
          color:'#0090f7',
        },
        data: [6200, 5820, 1910, 2340, 2900, 3300, 3100,1110,4440,9900,1000,8900]
      },
      {
        name: '欠薪数量',
        type: 'line',
        smooth: true,
        lineStyle:{
          color:'#5be9ff'
        },
        data: [3500, 2320, 6010, 1540, 1900, 3300, 4100,1000,4500,3900,6600,2000]
      },
    ]
  };
  let chartDom = document.getElementById('echarts4');
  if(chartDom){
  const myChart4 = echarts.init(chartDom);
  myChart4.setOption(option)
  return myChart4
  } 
}