<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <Image style="width: 2em" alt="Logo Electronics" img="https://cdn-icons-png.flaticon.com/512/4213/4213636.png"></Image></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link v-bind:to="toLink_2" class="nav-link active fst-italic" aria-current="page" href="#">{{ title }}</router-link>
          </li>
          <li class="nav-item">
            <router-link v-bind:to="toLink" class="nav-link active fst-italic" >{{f_option}}</router-link>

          </li>
          <li class="nav-item">
            <router-link v-bind:to="toLink_3" class="nav-link active fst-italic">{{s_option}}</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Image from "@/components/Image";
export default {
  name: "PxHeader",
  components: {Image},
  props:{

  title: String,
    f_option: String,
    toLink: String,
    toLink_2: String,
    toLink_3: String,
    s_option: String
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>