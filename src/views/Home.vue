<template>
  <div class="home">
    <header>
      <div class="header-box">
        <img src="../../public/favicon.jpg" alt="" />
        <div>
          <span>我是亮哥哥～</span>
          <p>经纪人</p>
        </div>
      </div>
    </header>
    <main>
      <div class="leftBox">
           
      </div>

      <div class="rightBox">
        <button @click="handlerClick">click!!!</button>
        <div class="tree-test">
             <Tree :dataSource="treeData" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Toast from '../components/Toast'
import Tree from '../components/Tree/Tree.vue'
import { dataSource } from './config'
export default {
  name: "Home",
  mounted() {
       Toast('hello word')
  },
  components: {
     Tree
  },
  data () {
     
     return {
         treeData : dataSource
     }
  },
  methods: {
    handlerClick() {
        Toast({
          imgSrc: "https://img2.baidu.com/it/u=2438645924,3546232272&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
          message:"你好，阿亮"
       })  
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-width: 1080px;
  height: 100%;
  box-sizing: border-box;
  header {
    width: 100%;
    height: 80px;
    background: #65b1ab;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    .header-box {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
      transition: 0.6s;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 3px;
        background-color: rgb(45, 160, 122);
      }
      &:hover img {
        transform: rotate(360deg);
        transition: 0.6s;
      }
    }
  }
  main {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    margin-top: 10px;
    .leftBox {
      width: 200px;
      height: 100%;
      background-color: #c7b7a6;
      margin-right: 10px;
      overflow-y: auto;
    }
    .rightBox {
      flex: 1;
      background-color: sandybrown;
      overflow-y: auto;
      .tree-test {
          width: 200px;
          margin-left: 60px;
          min-height: 500px;
          border: 1px solid #ddd;
          padding-left: 50px;
      }
    }
  }
}
</style>
