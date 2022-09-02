<template>
  <nav>
    <router-link to="/">Home-練習1</router-link> |
    <router-link to="/home2">Home2-練習2</router-link> |
    <router-link to="/about-props">Propsについて</router-link> |
    <router-link to="/document">ドキュメント実装</router-link> |
    <router-link to="/calendar">カレンダー</router-link>
  </nav>
  <router-view />
</template>

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
