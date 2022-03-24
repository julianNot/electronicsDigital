import Image from '@/components/Image';
<template>
  <section class="card">
    <section class="row">
      <div class="col">
        <label for="" class="text-start">Descripción</label>
        <input type="text" class="form-control" required v-model="description"/>
      </div>

      <div class="col">
        <label for="" class="">Cantidad</label>
        <input type="number" class="form-control" required v-model="amount"/>
      </div>
      <div class="col">
        <label for="" class="text-start">Precio c/u</label>
        <input type="number" class="form-control" required v-model="price"/>
      </div>
      <div class="d-flex flex-row-reverse">
          <!--<button type="submit" @click.prevent="addProduct(description, amount, price)" class="me-4"><span class="send"></span></button>-->
        <button type="submit" @click.prevent="addProduct(description, amount, price)">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>

    </section>
  </section>
  <section>
    <div class="bd-example mt-3">
      <table class="table table-dark table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product,index) in listProducts" :key="product.id" >
          <th scope="row">{{index+1}}</th>
          <td>{{product.description}}</td>
          <td>{{product.amount}}</td>
          <td> {{product.price}}</td>
          <!-- <td>edit, delete</td> -->
        </tr>
        </tbody>

      </table>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return {
            description : '',
            amount : 0,
            price : 0,
            listProducts : []
        }
    },
    methods  : {
        addProduct(description, amount, price){
            let data = {
                description,
                amount,
                price
            }
            console.log(this.listProducts.push(data))
            this.cleanData()
        },
        cleanData(){
            this.description = '',
            this.amount = 0,
            this.price = 0
        }
    },
};
</script>

<style scope>
button {
    border: none;
    background-color: white;
}

button span.send{
    display: inline-block;
    height: 32px;
    width: 32px;
    background-image: url(../assets/icons/send-message.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.col label{
    text-align: left;
    margin-left: 5px;
    padding-left: 5px ;
}

button {
  font-family: inherit;
  font-size: 20px;
  background: royalblue;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  -webkit-animation: fly-1 0.6s ease-in-out infinite alternate;
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  -webkit-transform: translateX(1.2em) rotate(45deg) scale(1.1);
  -ms-transform: translateX(1.2em) rotate(45deg) scale(1.1);
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
  -webkit-transform: translateX(5em);
  -ms-transform: translateX(5em);
  transform: translateX(5em);
}

button:active {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

@-webkit-keyframes fly-1 {
  from {
    -webkit-transform: translateY(0.1em);
    transform: translateY(0.1em);
  }

  to {
    -webkit-transform: translateY(-0.1em);
    transform: translateY(-0.1em);
  }
}

@keyframes fly-1 {
  from {
    -webkit-transform: translateY(0.1em);
    transform: translateY(0.1em);
  }

  to {
    -webkit-transform: translateY(-0.1em);
    transform: translateY(-0.1em);
  }
}


</style>
