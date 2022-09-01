<template>
  <div class="child2">
    <h1>{{ title }}</h1>
    <!-- ボタンが押されるとincrementCounterが実行される -->
    <button v-on:click="incrementCounter">ボタンクリック：{{ counter }}</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Hello Child2!",
      counter: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
      this.$emit("increment");
    },
  },
};
</script>

<style scoped>
div .child2 {
  border: 5px solid pink;
}
</style>