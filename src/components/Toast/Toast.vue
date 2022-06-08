<template>
    <div 
      class="toast-box" 
      v-if="!isObject"
    >
     {{ message }}
    </div>
    <div 
     v-else
     class="toast-box1"
     >
          <img :src="message.imgSrc" alt="">
          <p>{{message.message}}</p>
    </div>
</template>

<script>
export default{
   name : 'Toast' ,
   data () {
     return {
        message : '提示信息'
     }
   },
   computed : {
       isObject () {
          return typeof this.message === 'object' 
       }
   }
}
</script>

<style lang="scss" scoped>
     .toast-box , .toast-box1 {   
           background: rgba(0,0,0,.6); 
           color: #ffff; 
           font-size: 13px; 
           position: absolute;
           left: 0;
           right: 0;
           top: 0;
           bottom: 0;
           margin: auto;
           border-radius: 8px;
      }
      .toast-box {
        width: 120px;
        height:  35px;
        text-align: center;
        line-height: 35px;
      }
      .toast-box1 {
          width: fit-content;
          height: fit-content;
          padding: 35px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          img {
             width: 80px;
             height: 80px;
             opacity: .4;
             border-radius: 50%;
             margin-bottom: 25px;
          }
      }
</style>