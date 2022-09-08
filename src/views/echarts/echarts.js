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
      name: arrx[1].value,
      type: 'pie',
      radius: ['64%', '85%'],
      label: {
            show: true,
            position: 'center', // 数值显示在内部
            formatter:'{c}\n{a}',
            fontSize:24,
            rich: {
                a: {
                    color: '#1890ff'
                },
                c: {
                    color:'#F4A305'
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

