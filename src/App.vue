<template>
  <nav>
    <span v-for="(urlsItem, index) in urls" :key="index"
      ><router-link :to="returnUrl(urlsItem)">{{ urlsItem.title }}</router-link>
      |
    </span>
  </nav>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      locationHost: "localhost:8080",
      defaultCurrent: "/Practice_VueJS_Tutorial",
      urls: [
        { url: "/", title: "Home-練習1" },
        { url: "/home2", title: "Home-練習2" },
        { url: "/about-props", title: " Propsについて" },
        { url: "/document", title: " ドキュメント実装" },
        { url: "/calendar", title: " カレンダー" },
      ],
    };
  },
  methods: {
    returnUrl(val) {
      console.log(val.url);
      if (location.host !== this.locationHost) {
        return this.defaultCurrent + val.url;
      }
      return val.url;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
