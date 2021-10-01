<template>
  <v-app>
    <div class="wrapper">
      <Dialog />
    </div>
  </v-app>
</template>

<script>
import Dialog from "./components/Dialog.vue"

export default {
  name: 'App',
  components: {
    Dialog
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
}
</style>