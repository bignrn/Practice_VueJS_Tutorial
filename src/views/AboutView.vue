<!-- 参考：https://reffect.co.jp/vue/vue-js-master-props-for-beginner -->
<template>
  <div class="about">
    <h1>Propsとは</h1>
    <a
      href="https://reffect.co.jp/vue/vue-js-master-props-for-beginner"
      target="blake"
    >
      こちらを参考に下記について学んでいきます。
    </a>
    <div class="list">
      <div class="listItem">
        <h2>Propsを利用したシンプルな例</h2>
        <about-parent title="トートバック" :birthday="birthday"></about-parent>
      </div>
      <div class="listItem">
        <h2>コンポーネントの再利用</h2>
        <about-parent title="バックパック" :birthday="birthday"></about-parent>
      </div>
      <div class="listItem">
        <h2>v-bindを利用した場合</h2>
        <about-parent
          v-bind:title="aParentTitle"
          :birthday="birthday"
        ></about-parent>
        <about-parent :title="aParentTitle" :birthday="birthday"></about-parent>
      </div>
      <div class="listItem">
        <h2>PropsのTypeを設定</h2>
        <about-parent :title="aParentTitle" :birthday="birthday"></about-parent>
        <about-parent :num="num" :birthday="birthday"></about-parent>
      </div>
    </div>
  </div>
</template>

<script>
import AboutParent from "../components/About/AboutParent.vue";

export default {
  name: "AboutView",
  components: {
    AboutParent,
  },
  data: function () {
    return {
      aParentTitle: "トートバックbind",
      num: 3,
      birthday: 12345678,
    };
  },
};
</script>

<style scoped>
div .about .list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
}
div .listItem {
  margin: 0px, 5px;
}
</style>