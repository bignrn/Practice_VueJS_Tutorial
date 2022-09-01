<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world-2 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld2 from "@/components/HelloWorld2.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld2,
  },
};
</script>
