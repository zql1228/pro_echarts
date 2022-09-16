<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import  {pageResize} from './config/resetScreenSize'
export default{
  mounted(){
    pageResize()
  }
}
</script>
<style lang="less">
html,body{
  margin:0;padding:0;
  width:100%;
  height:100%;
}
</style>
