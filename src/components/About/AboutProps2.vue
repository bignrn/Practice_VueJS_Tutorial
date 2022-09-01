<template>
  <div>
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "AboutProps2",
  props: {
    name: {
      type: String,
      default: "バッグ",
      validator: (value) => {
        return ["バッグ", "トートバック", "バックパック"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped>
</style>