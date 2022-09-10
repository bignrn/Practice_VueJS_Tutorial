<template>
  <nav>
    <span v-for="(urlsItem, index) in urls" :key="index"
      ><router-link :to="urlsItem.url">{{ urlsItem.title }}</router-link>
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
        { url: "/Practice_VueJS_Tutorial/", title: "Home-練習1" },
        { url: "/Practice_VueJS_Tutorial/home2", title: "Home-練習2" },
        {
          url: "/Practice_VueJS_Tutorial/about-props",
          title: " Propsについて",
        },
        {
          url: "/Practice_VueJS_Tutorial/document",
          title: " ドキュメント実装",
        },
        { url: "/Practice_VueJS_Tutorial/calendar", title: " カレンダー" },
      ],
    };
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
