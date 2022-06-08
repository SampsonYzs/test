 
  import Vue from "vue"

  import Toast from './Toast' 

  const Await = delay => {
      return new Promise((resolve , reject ) => {
            setTimeout(() => {
                resolve()
            },delay)
      })
  }

  const fade = (Com , app ) =>{
    (async () => {
      Com.$el.style.opacity = 0
      await Await(500)
      Com.$el.style.opacity = 1
      Com.$el.style.transition = '.6s'
      await Await(1500) 
      Com.$el.style.opacity = 0
      Com.$el.style.transition = '.6s'
      await Await(500)
      app.removeChild(Com.$el)
    })()
  }
   
 export default ( params ) => {
     
      const App = Vue.extend(Toast) 

      const Com = new App()
      
      const app = document.querySelector('#app')

      const el = document.createElement('div') 
      
      app.appendChild(el)

      Com.$mount(el)

      Com.message = params

      fade(Com,app)

 }