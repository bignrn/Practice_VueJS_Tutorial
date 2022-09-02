<template>
  <div>
    <document-vue-js></document-vue-js>
  </div>
</template>

<script>
// @ is an alias to /src
import DocumentVueJs from "@/components/DocumentMainScrn.vue";

export default {
  name: "DocumentView",
  components: {
    DocumentVueJs,
  },
};
</script>
