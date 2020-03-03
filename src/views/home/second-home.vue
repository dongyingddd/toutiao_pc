<template>
  <div class="second-home">
      <!-- 幻灯片 -->
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in list" :key="item">
           <img :src="item" alt="">
        </el-carousel-item>
     </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img3.imgtn.bdimg.com/it/u=630380560,3198151919&fm=26&gp=0.jpg',
        'http://img.jk51.com/img_jk51/353334177.jpeg',
        'http://up.enterdesk.com/edpic/78/4b/e2/784be2001bd41f6719726b0bd05aee65.jpg',
        'http://img35.51tietu.net/pic/2016-121300/20161213001615digelkb4eaq15059.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    .second-home{
        height: calc(100vh - 60px);
        background-image: url('../../assets/img/login_back5.jpg');
        background-size: cover;
    }
</style>
