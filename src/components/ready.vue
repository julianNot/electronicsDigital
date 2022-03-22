<template>
  <button> {{ phrase }}
  </button>
</template>

<script>
export default {
  name: "ready",
  props:{
    phrase: String,
  }
}
</script>

<style scoped>
button {
  --green: #1BFD9C;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: -webkit-gradient(linear, left top, right top, color-stop(1%, rgba(27, 253, 156, 0.1)), color-stop(40%, transparent),color-stop(60%, transparent) , to(rgba(27, 253, 156, 0.1)));
  background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
  color: var(--green);
  -webkit-box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
}

button:hover {
  color: #82ffc9;
  -webkit-box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
}

button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  -webkit-transition: -webkit-transform .4s ease-in-out;
  transition: -webkit-transform .4s ease-in-out;
  transition: transform .4s ease-in-out;
  transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
  background: -webkit-gradient(linear, left top, right top, color-stop(1%, transparent), color-stop(40%, rgba(27, 253, 156, 0.1)),color-stop(60%, rgba(27, 253, 156, 0.1)) , to(transparent));
  background: linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60% , transparent 100%);
}

button:hover:before {
  -webkit-transform: translateX(15em);
  -ms-transform: translateX(15em);
  transform: translateX(15em);
}
</style>