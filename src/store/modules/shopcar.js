const state = {
  count: 1,
  items: []
};

const getters = {
  getCount: state => state.count,
  getItems: state => state.items
};

const actions = {
  async fetchItems(state) {
    fetch("http://localhost:5050/api/car")
      // fetch("http://106.15.88.174:5050/api/car")
      .then(res => res.json())
      .then(data => {
        state.commit("setItems", data);
      })
      .catch(err => console.log(err));
  },
  plus(state, payload) {
    state.commit("plus", payload);
  },
  addItem(state, payload) {
    console.log(payload);
    fetch("http://localhost:5050/api/car/add", {
      // fetch("http://106.15.88.174:5050/api/car/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    state.commit("addItem", payload);
  },
  deleteItem(state, payload) {
    fetch(`http://localhost:5050/api/car/delete/${payload}`, {
      // fetch(`http://106.15.88.174:5050/api/car/delete/${payload}`, {
      method: "DELETE"
    })
      .then(response => {
        console.log(response);
        state.commit("deleteItem", payload);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const mutations = {
  setItems: (state, items) => {
    state.items = items;
  },
  plus(state, payload) {
    state.count += payload;
  },
  addItem(state, payload) {
    state.items.push(payload);
  },
  deleteItem(state, payload) {
    state.items = state.items.filter(item => {
      return payload != item._id;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
