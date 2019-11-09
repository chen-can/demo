<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="router-view" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="router-view" />
  </div>
</template>
<style lang="scss">
@import '~@/assets/styles/boder.css';
@import '~@/assets/styles/reset.css';
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f4f4f4;
}
#app,
.router-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
