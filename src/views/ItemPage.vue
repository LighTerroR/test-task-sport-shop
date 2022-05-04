<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <b-img
            v-if="!item.photo.length"
            img-width="800"
            img-height="600"
            src="/no-image.webp"
          />
          <b-carousel
            v-else
            controls
            indicators
            :interval="0"
            img-width="800"
            img-height="600"
          >
            <b-carousel-slide v-for="photo, index in item.photo" :key="index" :img-src="photo" />
          </b-carousel>
        </b-col>
        <b-col>
          <div class="d-flex">
            <div class="parameters">
              <p class="parameters__name">Name:</p>
              <p class="parameters__value">{{ item.name }}</p>
            </div>
            <div>
              <p class="parameters__name">Category:</p>
              <p class="parameters__value">{{ item.category }}</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="parameters">
              <p class="parameters__name">Amount:</p>
              <p class="parameters__value">{{ item.amount }}</p>
            </div>
            <div>
              <p class="parameters__name">Price:</p>
              <p class="parameters__value">{{ item.price }}</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <pre class="item__description">{{ item.description }}</pre>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ItemPage',
  data() {
    return {
      item: {
        id: '',
        name: '',
        category: null,
        amount: '',
        price: '',
        description: '',
        photo: [],
      },
    };
  },
  mounted() {
    this.item = this.$store.state.sportProducts.find((item) => item.id === +this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.parameters {
  width: 50%;

  &__name {
    font-size: 18px;
    font-weight: 700;
    color: #17a2b8;
  }

  &__value {
    font-size: 20px;
    font-weight: 500;
  }
}

.item__description {
  font-size: 16px;
}
</style>
