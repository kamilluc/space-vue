<template>
  <div class="app">
    <div class="nav">
      <router-link to="/" class="redirect">Home</router-link>
      <router-link to="/about" class="redirect"> About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}
.redirect {
  text-decoration: none;
}
.nav {
  text-decoration: none;
  color: #333;
  // margin-left: 10px;
  padding: 10px;
}
</style>
