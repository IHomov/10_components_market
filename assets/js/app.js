const productsURL = 'https://fakestoreapi.com/products';

import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";
import { oneCard } from "./components/oneCard.js";

createApp({
   components: {
      oneCard
   },

   data() {
      return {
         title: 'Products market ',
         list: []
      }
   },

   async mounted() {
      let result = await fetch(productsURL);
      result = await result.json();
      console.log(result);
      console.log(result[40]);
      this.list = result;
   }
}
).mount('#app');
