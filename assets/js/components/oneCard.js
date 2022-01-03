const oneCard = {
   props: ['card'],
   template: `
      <div class="p-2">
         <div class="card text-center shadow" >
               <img :src="card.image" class=" rounded mx-auto d-block p-4" style="width: 10rem; height: 10rem" >
         <div class="card-body">
               <h5 class="card-title count-title">{{card.title}}</h5>
               <p class="card-text count-row">{{card.description}}</p>
               <h6 class="card-text text-end">{{card.price}} $</h6>
               <div class="d-flex justify-content-evenly">
                  <a href="#" class="btn btn-primary">-1</a>
                  <input type="text">
                  <a href="#" class="btn btn-primary">+1</a>
               </div>
         </div>
         </div>
      </div>
   `
}


export { oneCard };