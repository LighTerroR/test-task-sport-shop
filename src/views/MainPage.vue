<template>
<div>
  <b-container>
    <b-row align-v="center">
    </b-row>
    <b-table
      id="items-table"
      class="align-items-end"
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
      <template #cell(photo)="row">
        <b-img
          :src="(row.item.photo.length > 0) ? row.item.photo[0] : '/no-image.webp'"
          :alt="row.item.name"
          v-bind="{width: 75, height: 75}"
          style="object-fit: cover"
          @click="modalPhoto(row, $event.target)"
        />
      </template>
      <template #cell(actions)="row">
        <b-button size="sm" variant="primary" :to="`/item/${row.item.id}`" class="mr-2">
          View
        </b-button>
        <b-button size="sm" variant="secondary" :to="`/item/${row.item.id}/edit`" class="mr-2">
          Edit
        </b-button>
        <b-button size="sm" variant="danger" @click="deleteItem(row.item.id)">
          Delete
        </b-button>
      </template>
    </b-table>
    <b-pagination
      pills
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="items-table"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
    <b-modal :id="infoModal.id" size="xl" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <b-img :src="infoModal.photo[0]" style="width: 100%"/>
    </b-modal>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: 'id',
          label: 'id',
        },
        {
          key: 'photo',
          label: 'Preview',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'category',
          label: 'Category',
        },
        {
          key: 'amount',
          label: 'Amount',
        },
        {
          key: 'price',
          label: 'Price',
        },
        {
          key: 'actions',
          label: 'Actions',
        },
      ],
      infoModal: {
        id: 'photo-modal',
        title: '',
        photo: '',
      },
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  mounted() {
    this.updateItems();
  },
  methods: {
    updateItems() {
      this.items = this.$store.state.sportProducts;
    },
    modalPhoto(par, e) {
      this.infoModal.title = par.item.name;
      this.infoModal.photo = par.item.photo;
      this.$root.$emit('bv::show::modal', this.infoModal.id, e);
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.photo = '';
    },
    deleteItem(id) {
      this.$store.commit('deleteItem', id);
      localStorage.sportProducts = JSON.stringify(this.$store.state.sportProducts);
    },
  },
};
</script>
