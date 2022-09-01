<template>
  <h1>{{ msg }}</h1>
  <HelloWorld msg="Hello Vue!!" />
  <HelloChild :message="msg" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloChild from "./components/HelloChild.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloChild,
  },
  data: function () {
    return {
      msg: "元になるApp.vueです。",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
