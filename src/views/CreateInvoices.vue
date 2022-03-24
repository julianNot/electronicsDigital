<template>
  <div class="container mt-5">
    <form @submit.prevent="registerInvonce" method="POST">
      <h2>Datos Cliente</h2>
      <article class="card">
        <section class="d-flex">
          <label for="i-name" class="">Nombre:</label>
          <input type="text" id="i-name" class="form-control" v-model="name" />

          <label for="i-lastName">Apellido:</label>
          <input
            type="text"
            id="i-lastName"
            class="form-control"
            v-model="lastName"
          />

          <label for="i-id">Documento:</label>
          <input
            type="number"
            id="i-id"
            class="form-control"
            v-model="document"
          />
        </section>
        <section class="d-flex">
          <label for="i-phone">Numero de Telefono:</label>
          <input
            type="tel"
            id="i-phone"
            class="form-control"
            v-model="numberTel"
          />

          <label for="i-city">Dirección:</label>
          <input
            type="text"
            id="i-city"
            class="form-control"
            v-model="address"
          />
        </section>
      </article>
      <h2 class="mt-4">Datos Corporativos</h2>
      <section class="card">
        <section class="d-flex">
          <label for="i-nameC">Nombre Empresa:</label>
          <input
            type="text"
            id="i-nameC"
            class="form-control"
            v-model="nameCorpo"
          />
          <label for="i-nit">Nit:</label>
          <input type="text" id="i-nit" class="form-control" v-model="nit" />
          <label for="i-city">Dirección:</label>
          <input type="text" class="form-control" v-model="addressCorpo" />
        </section>
        <section></section>
      </section>
      <h2 class="mt-4">Productos</h2>
      <section class="card">
        <section class="row">
          <div class="col">
            <label for="" class="text-start">Descripción</label>
            <input type="text" class="form-control" v-model="description" />
          </div>

          <div class="col">
            <label for="" class="">Cantidad</label>
            <input type="number" class="form-control" v-model="amount" />
          </div>
          <div class="col">
            <label for="" class="text-start">Precio c/u</label>
            <input type="number" class="form-control" v-model="price" />
          </div>
          <div class="d-flex flex-row-reverse">
            <button
              type=""
              @click.prevent="addProduct(description, amount, price)"
            >
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
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
              <tr v-for="(product, index) in listProducts" :key="product.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ product.description }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.price }}</td>
                <!-- <td>edit, delete</td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <button type="submit" class="btn btn-success">Obtener Factura</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      description: "",
      amount: 0,
      price: 0,
      listProducts: [],
      /* data client */
      name: "",
      lastName: "",
      document: 0,
      numberTel: 0,
      address: "",
      /* data coorp */
      nameCorpo: "",
      nit: 0,
      addressCorpo: "",
    };
  },
  methods: {
    addProduct(description, amount, price) {
      let data = {
        description,
        amount,
        price,
      };
      console.log(this.listProducts.push(data));
      this.cleanData();
    },
    getProducts(){
      return this.listProducts
    },
    cleanData() {
      (this.description = ""), (this.amount = 0), (this.price = 0);
    },
    async registerInvonce() {
      let count = 3
      const invoice = {
        id: count+1,
        client: {
          name: this.name,
          lastName: this.lastName,
          document: this.document,
          numberCell: this.numberTel,
          address: this.address,
        },
        business: {
          name: this.nameCorpo,
          nit: this.nit,
          address: this.addressCorpo,
        },
        products: this.listProducts,
      };
      axios.post("http://localhost:3000/api/v1/invoices",invoice).then((result) => {
        console.log(result)
      });
    },
  },
};
</script>

<style>
form {
  padding: 10px;
  margin: 0 auto;
  max-width: 90%;
}

h2 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
}

label {
  display: inline-block;
  width: 90px;
  margin: 8px;
  font-size: 1rem;
  font-weight: 500;
}

input {
  max-width: 190px;
  max-height: 35px;
  margin: 8px;
}

button {
  border: none;
  background-color: white;
}

button span.send {
  display: inline-block;
  height: 32px;
  width: 32px;
  background-image: url(../assets/icons/send-message.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.col label {
  text-align: left;
  margin-left: 5px;
  padding-left: 5px;
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