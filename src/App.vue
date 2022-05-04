<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  beforeCreated() {
    this.$store.commit('takeItemsFromLocalStorage', JSON.parse(localStorage.sportProducts));
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>
