<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Sport Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-button v-show="notEdit" variant="success" @click="create" class="mr-2">
            Create New Product
          </b-button>
          <b-button v-show="notMain" variant="primary" @click="back">
            {{ (this.$route.name === 'item') ? 'Back' : 'Cancel'}}
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderShop',
  methods: {
    create() {
      const id = this.generateId();
      this.$router.push(`/item/${id}/edit`);
    },
    back() {
      this.$router.back();
    },
    generateId() {
      const id = Math.floor(Math.random() * 100);
      if (this.$store.state.sportProducts.find((item) => item.id === id)) return this.generateID();
      return id;
    },
  },
  computed: {
    notMain() {
      return (this.$route.name !== 'main');
    },
    notEdit() {
      return (this.$route.name !== 'edit');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
