<template>
<img v-bind:style="classes" v-bind:src="img" v-bind:alt="alt">
</template>

<script>
export default {
  name: "Image",
  props:{
    classes: String,
    alt : String,
    img : String,
    width : String,
  },

}
</script>

<style scoped>

</style>