<template>
  <input :type="typeInput" class="form-control" :id="idInput">
</template>

<script>
export default {
    props : {
        typeInput : {
            typeof : String,
            required : true,
        },
        idInput : {
            typeof : String
        }
    }

}
</script>

<style scope>

input {
  max-width: 190px;
  max-height: 35px;
  margin: 8px;
}

</style>