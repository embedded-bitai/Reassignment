<template>
  <v-app>
    <transition name="view">
      <router-view class="main"/>
    </transition>
  </v-app>
</template>

<style scoped>
.view-leave-active,
.view-enter-active {
  transition: 1.5s;
  opacity: 1;
}
.view-enter{
  transform: translate(100%, 0);
  opacity: 0;
}

.view-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
}
.main {
  position: absolute;
  width: 100%;
  left: 0;
  padding: 2%;
}
</style>
