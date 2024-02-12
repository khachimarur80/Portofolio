<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.setRouteTitle(this.$route);

    this.$router.beforeEach((to, from, next) => {
      document.title = to.meta.title || 'Kei';
      next();
    });
  },
  methods: {
    setRouteTitle(route) {
      document.title = route.meta.title || 'Kei';
    },
  }
};
</script>
<style>
  ::-webkit-scrollbar {
    width: 0;
  }
  body, html {
    overflow: hidden;
    margin: 0;
    padding: 0;
    background: transparent;
    font-family: 'Verdana';
  }
  #app {
    height: 100vh;
    width: 100h;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: transparent;
  }
  .aurie {
    font-weight: bold;
    color: rgb(255, 68, 57);
  }
  .stacklit {
    font-weight: bold;
    color: rgb(27, 224, 161);
  }
  .luhmann {
    font-weight: bold;
    color: rgb(0, 129, 249);
  }
  .diamond {
    font-weight: bold;
    color: rgb(92, 124, 181);
  }
</style>