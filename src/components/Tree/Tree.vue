
<script>
    export default {
        name : "Tree" ,
        props : {
            dataSource : {
                type : Array ,
                require : true ,
                default : () => []
            }
        },
        mounted() {
        
        },
        data () {
            return {
                source : []
            }
        },
        methods : {
            onshow ( e , item  ) {
                 const el = e.target.parentNode
                 const height = el.clientHeight
                 let show = el.dataset.show
                 show = !eval(show);
              
                 [...el.children].forEach((item , index ) => {
                       if ( index !== 0 && index !== 1) {
                           show ? item.style.display = 'block' : item.style.display = 'none'
                           show ? el.children[0].innerHTML = '-' : el.children[0].innerHTML = '+'
                       }
                      
                 })
                el.dataset.show = show;
            }
        }
    }
</script>


<template>
     <ul 
       class="tree-container"
      >
          <li
            class="tree-item"
            v-for="(item , index ) of dataSource"
            :key="index"
            :data-show="true"
          >
               <button 
                v-if="item.children"
                @click="onshow($event,item)"
               >-</button>
               <p>{{ item.value }}</p>
               <div class="content" style="margin-left:20px;">
                   <Tree v-if="item.children" :dataSource="item.children" />
               </div>
          </li>
     </ul>
</template>



<style lang="scss" >
     .tree-container {
      // margin-left: 20px;
      cursor: pointer;
         .tree-item {
           position: relative;
           button {
             position: absolute;
             left: -30px;
             top: -5px;
             background: none;
             font-size: 20px;
             border: none;
             outline: none;
             color: #000;
             border: 1px solid #000;
             padding: 3px;
           }
             p {
                font-size: 18px; 
                margin-top: 15px;
             }
         }
      }
</style>