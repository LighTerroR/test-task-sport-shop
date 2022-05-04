<template>
  <b-container class="mt-5">
    <ValidationObserver v-slot="{ invalid }">
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Name*:</b-col>
        <b-col cols="9">
          <validation-provider
            :rules="{
              required: true,
              min: 3,
              regex: /[a-zA-Z]/,
              is_not: (allProducts.find((item) => item.id === id))
                ? false
                : allProducts.reduce((massNames, item) => {
                  massNames.push(item.name);
                  return massNames;
                }, []),
            }"
            v-slot="{ valid, changed, errors }"
          >
            <b-form-input
              id="input-live"
              v-model="item.name"
              :state="(changed) ? valid : null"
              aria-describedby="input-live-help input-name-feedback"
              placeholder="Enter product name"
              trim
            ></b-form-input>
            <b-form-invalid-feedback id="input-name-feedback">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Category*:</b-col>
        <b-col cols="9">
          <validation-provider rules="required" v-slot="{ valid }">
            <b-form-select
              v-model="item.category"
              :options="options"
              :state="valid"
              aria-describedby="input-category-feedback"
            />
            <b-form-invalid-feedback id="input-category-feedback">
              This field is required
            </b-form-invalid-feedback>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Amount*:</b-col>
        <b-col cols="9">
          <validation-provider rules="required|min_value:1" v-slot="{ valid, changed }">
            <b-form-input
              id="input-live"
              v-model="item.amount"
              :state="(changed) ? valid : null"
              aria-describedby="input-live-help input-amount-feedback"
              placeholder="Enter product amount"
              trim
            ></b-form-input>
            <b-form-invalid-feedback id="input-amount-feedback">
              Amount must be at least 1
            </b-form-invalid-feedback>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Price*:</b-col>
        <b-col cols="9">
          <validation-provider rules="required|min_value:1" v-slot="{ valid, changed }">
            <b-form-input
              id="input-live"
              v-model="item.price"
              :state="(changed) ? valid : null"
              aria-describedby="input-price-feedback"
              placeholder="Enter product price"
              trim
            ></b-form-input>
            <b-form-invalid-feedback id="input-price-feedback">
              Value must be greater than 0
            </b-form-invalid-feedback>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Description:</b-col>
        <b-col cols="9">
          <validation-provider rules="max:255" v-slot="{ valid, changed }">
            <b-form-textarea
              id="textarea-state"
              v-model="item.description"
              :state="(changed) ? valid : null"
              aria-describedby="input-description-feedback"
              placeholder="Enter description"
              rows="5"
              no-resize
            ></b-form-textarea>
            <b-form-invalid-feedback id="input-description-feedback">
              must be no more than 255 characters
            </b-form-invalid-feedback>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-v="center">
        <b-col cols="3" class="parameter__name">Image:</b-col>
        <b-col cols="9" class="d-flex">
          <b-form-input
            id="input-live"
            class="mr-2"
            v-model="photo"
            placeholder="Enter link to image"
            :disabled="item.photo.length >= 3"
            trim
          ></b-form-input>
          <b-button size="sm" variant="success" @click="addPhoto()" :disabled="item.photo.length >= 3">
            Add
          </b-button>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-h="end">
        <b-col cols="9" class="d-flex">
          <div v-for="photo,index in item.photo" :key="index" class="image mr-2">
            <b-img :src="photo" class="image__photo" @error="e => e.target.src = '/no-image.webp'"/>
            <div class="image__cross" @click="deletePhoto(index)" />
          </div>
        </b-col>
      </b-row>
      <b-row class="mb-2" align-h="center">
        <b-button size="sm" variant="success" @click="saveChanges" :disabled="invalid">Save</b-button>
      </b-row>
    </ValidationObserver>
  </b-container>
</template>

<script>
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
import {
  required,
  max,
  min,
  // eslint-disable-next-line camelcase
  min_value,
  regex,
} from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required',
});

extend('max', max);

extend('min', {
  ...min,
  message: 'Enter at least 3 letters',
});

extend('min_value', min_value);

extend('is_not', {
  validate(value, args) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of args) {
      if (item === value) return false;
    }
    return true;
  },
  message: 'Duplicate name of product',
});

extend('regex', {
  ...regex,
  message: 'Field must contain more than just numbers',
});

export default {
  name: 'EditPage',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      item: {
        id: +this.$route.params.id,
        name: '',
        category: null,
        amount: '',
        price: '',
        description: '',
        photo: [],
      },
      options: [
        { value: null, text: '-- Please select an option --', disabled: true },
        { value: 'a', text: 'A' },
        { value: 'b', text: 'B' },
      ],
      photo: '',
      id: +this.$route.params.id,
      allProducts: this.$store.state.sportProducts,
      /* ruleForName: {
        required,
        min: 3,
        is_not: (this.allProducts.find((item) => item.id === this.id))
          ? false
          : this.allProducts.reduce((massNames, item) => {
            massNames.push(item.name);
            return massNames;
          }, []),
      }, */
    };
  },
  mounted() {
    this.item = this.allProducts.find(
      (item) => item.id === this.id,
    ) || this.item;
  },
  methods: {
    addPhoto() {
      this.item.photo.push(this.photo);
      this.photo = '';
    },
    deletePhoto(index) {
      this.item.photo.splice(index, 1);
    },
    saveChanges() {
      this.$store.commit('saveChanges', this.item);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.parameter__name {
  font-size: 18px;
  font-weight: 700;
}
.image {
  position: relative;
  width: 75px;
  height: 75px;

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__cross {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background: rgba($color: #000000, $alpha: 0.3);
    backdrop-filter: blur(70px);
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 2px;
      background: $white;
      content: '';
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
