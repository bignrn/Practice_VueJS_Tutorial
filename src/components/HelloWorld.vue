<template>
  <!-- 練習1 -->
  <div class="parent">
    <p>{{ msg }}</p>
    <h1>{{ title }}</h1>
    <p>入力してね：<input v-model="input_msg" /></p>
    <hello-child :message="input_msg" />
  </div>
  <!-- 練習2 -->
  <div class="parent2">
    <h1>{{ title2 }}</h1>
    <p>{{ total }}</p>
    <!-- incrementと言うイベントを定義。子コンポーネントから$emitされたら、incrementTotal実行される -->
    <hello-child-2 v-on:increment="incrementTotal" />
    <hello-child-2 v-on:increment="incrementTotal" />
    <hello-child-2 v-on:increment="incrementTotal" />
  </div>
</template>

<script>
import HelloChild from "./HelloChild.vue";
import HelloChild2 from "./HelloChild2.vue";
export default {
  components: { HelloChild, HelloChild2 },
  data: function () {
    return {
      title: "Hello World",
      input_msg: "初期値",
      title2: "Hello World2",
      total: 0,
    };
  },
  methods: {
    incrementTotal: function () {
      this.total += 1;
    },
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
