<template>
  <div id="navbar" :class="[over ? 'over' : '', show ? 'show' : '']">
    <a v-for="(item, i) in items" :key="i" class="navbar-item" :href="item.href">
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'vNavBar',
  props: {
    over: {
      required: true
    },
    items: {
      required: true
    },
    show: {
      required: true
    }
  },
}
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease;
}

#navbar.over {
  opacity: 1;
}
#navbar.show {
  background: var(--primary);
}
.show .navbar-item {
  color: var(--background);
  opacity: .8;
}
.show .navbar-item:hover {
  color: var(--background-dark);
  opacity: 1;
}
.show .navbar-item:before {
  background-image: linear-gradient(to right, var(--background-dark), var(--background-dark));
}

.navbar-item:hover:before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.navbar-item:hover {
  color: var(--primary);
}

.navbar-item {
  transform: scaleX(1);
  position: relative;
  overflow: hidden;
  color: #999;
  font-size: 24px;
  user-select: none;
  text-decoration: none;
  transition: color .5s ease;
}

.navbar-item:before {
  content: "";
  position: absolute;
  display: block;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to right, var(--primary), var(--primary));
  height: 2px;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}
</style>
