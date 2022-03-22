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
          <button type="submit" @click.prevent="addProduct(description, amount, price)" class="me-4"><span></span></button>
      </div>
    </section>
  </section>
  <section>
      <ul>
          <li v-for="product in listProducts" :key="product.id">
              {{product.description}} |
              {{product.amount}} |
              {{product.price}}
          </li>
      </ul>
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

button span{
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
</style>
