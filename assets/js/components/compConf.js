
const compConf = {
   data() {
      return {
         counter: 0
      }
   },
   mounted() {
      this.counter = this.startValue;
   },

   props: ['userName', 'city', 'startValue', 'elemId'],
   template: `
         <div
            @click="counter++; $emit('my-event', counter, elemId);"
            class= "alert alert-danger">
               Hello {{userName}} 
               from {{city}} 
               {{counter}} times!
         </div>
   `
}

export { compConf };