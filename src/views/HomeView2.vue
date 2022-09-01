<template>
  <div class="home">
    <hello-world-2 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld2 from "@/components/HelloWorld2.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld2,
  },
};
</script>
