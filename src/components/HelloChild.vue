<!-- チュートリアル：https://blog.brainpad.co.jp/entry/2018/04/13/160000 -->
<template>
  <div class="child">
    <h1>{{ title }}</h1>
    <!-- ここでpropsに設定された値をそのまま表示する -->
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Hello Child!",
    };
  },
  props: ["message"],
};
</script>

<style>
div .child {
  border: 3px solid red;
}
</style>
