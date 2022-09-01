<template>
  <div>
    <h3>title: {{ title }}</h3>
    <h3>{{ age }}</h3>
    <h4>誕生日:{{ birthday }}</h4>
  </div>
</template>

<script>
export default {
  name: "AboutParent",
  props: {
    title: {
      type: String,
      default: "バック",
    },
    age: {
      type: Number,
    },
    birthday: {
      type: Number,
      required: true,
    },
    breadcrumbs: {
      //配列のデフォルトの場合はこう↓
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
</style>