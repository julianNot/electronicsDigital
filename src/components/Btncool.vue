<template>

  <button role="button" class="button-name">{{ phrase }}</button>
</template>

<script>
export default {
  name: "Btncool",
  props:{
    phrase : String,
  }
}

</script>

<style scoped>
.button-name {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  -webkit-box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,rgba(45, 35, 66, 0.15) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,rgba(45, 35, 66, 0.15) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  -webkit-transition: -webkit-box-shadow .15s,-webkit-transform .15s;
  transition: -webkit-box-shadow .15s,-webkit-transform .15s;
  transition: box-shadow .15s,transform .15s;
  transition: box-shadow .15s,transform .15s,-webkit-box-shadow .15s,-webkit-transform .15s;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-name:focus {
  -webkit-box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-name:hover {
  -webkit-box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px, rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  -webkit-transform: translateY(-2px);
  -ms-transform: translateY(-2px);
  transform: translateY(-2px);
}

.button-name:active {
  -webkit-box-shadow: #D6D6E7 0 3px 7px inset;
  box-shadow: #D6D6E7 0 3px 7px inset;
  -webkit-transform: translateY(2px);
  -ms-transform: translateY(2px);
  transform: translateY(2px);
}

</style>