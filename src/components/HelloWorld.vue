<template>
  <!-- 練習1 -->
  <div class="parent">
    <p>{{ msg }}</p>
    <h1>{{ title }}</h1>
    <p>入力してね：<input v-model="input_msg" /></p>
    <hello-child :message="input_msg" />
  </div>
</template>

<script>
import HelloChild from "./HelloChild.vue";
export default {
  components: { HelloChild },
  data: function () {
    return {
      title: "Hello World",
      input_msg: "初期値",
    };
  },
  props: ["msg"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div .parent {
  border: 3px solid blue;
}
div .parent2 {
  border: 3px solid skyblue;
}
</style>
