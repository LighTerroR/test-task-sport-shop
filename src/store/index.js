import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sportProducts: [
      {
        id: 1,
        name: 'Dickerson',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1920/1080/?image=41',
          'https://picsum.photos/1920/1080/?image=42',
          'https://picsum.photos/1920/1080/?image=43',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 2,
        name: 'Larsen',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=40',
          'https://picsum.photos/1024/400/?image=41',
          'https://picsum.photos/1024/400/?image=42',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 3,
        name: 'Geneva',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=45',
          'https://picsum.photos/1024/400/?image=46',
          'https://picsum.photos/1024/400/?image=47',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 4,
        name: 'Jami',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=49',
          'https://picsum.photos/1024/400/?image=50',
          'https://picsum.photos/1024/400/?image=51',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 5,
        name: 'Dickerson',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1920/1080/?image=41',
          'https://picsum.photos/1920/1080/?image=42',
          'https://picsum.photos/1920/1080/?image=43',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 6,
        name: 'Larsen',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=40',
          'https://picsum.photos/1024/400/?image=41',
          'https://picsum.photos/1024/400/?image=42',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 7,
        name: 'Geneva',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 8,
        name: 'Jami',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=49',
          'https://picsum.photos/1024/400/?image=50',
          'https://picsum.photos/1024/400/?image=51',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 9,
        name: 'Dickerson',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1920/1080/?image=41',
          'https://picsum.photos/1920/1080/?image=42',
          'https://picsum.photos/1920/1080/?image=43',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 10,
        name: 'Larsen',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=40',
          'https://picsum.photos/1024/400/?image=41',
          'https://picsum.photos/1024/400/?image=42',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 11,
        name: 'Geneva',
        category: 'a',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=45',
          'https://picsum.photos/1024/400/?image=46',
          'https://picsum.photos/1024/400/?image=47',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
      {
        id: 12,
        name: 'Jami',
        category: 'b',
        amount: 10,
        price: 50,
        photo: [
          'https://picsum.photos/1024/400/?image=49',
          'https://picsum.photos/1024/400/?image=50',
          'https://picsum.photos/1024/400/?image=51',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam qui nihil accusantium ea pariatur, consectetur earum officia ab provident dicta
          magni facere fuga quis, perspiciatis voluptatum voluptate culpa molestias quia possimus in
          laboriosam! Hic tempora repudiandae placeat voluptatem impedit, a officiis! Minima
          voluptatem consectetur atque, quae earum nesciunt dolorum suscipit.`,
      },
    ],
  },
  getters: {
  },
  mutations: {
    createItem(state, item) {
      state.sportProducts.push(item);
    },
    deleteItem(state, id) {
      state.sportProducts.splice(
        state.sportProducts.findIndex((item) => item.id === id),
        1,
      );
    },
    saveChanges(state, item) {
      if (state.sportProducts.find((i) => i.id === item.id)) {
        state.sportProducts[state.sportProducts.findIndex((i) => i.id === item.id)] = item;
      } else {
        state.sportProducts.push(item);
      }
    },
    takeItemsFromLocalStorage(state, storage) {
      state.sportProducts.length = 0;
      state.sportProducts = [...storage];
    },
  },
  actions: {
  },
  modules: {
  },
});
