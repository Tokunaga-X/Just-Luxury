const state = {
  goods: []
};

const getters = {
  getGoods: state => state.goods
};

const actions = {
  async fetchGoods(state) {
    fetch("http://localhost:5050/api/goods")
    // fetch("http://106.15.88.174/:5050/api/goods")
      .then(res => res.json())
      .then(data => {
        state.commit("setGoods", data);
      })
      .catch(err => console.log(err));
  }
  //   addGood(state, payload) {
  //     fetch("http://localhost:5050/api/car/add", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify(payload)
  //     })
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     state.commit("addItem", payload);
  //   },
  //   deleteItem(state, payload) {
  //     fetch(`http://localhost:5050/api/car/delete/${payload}`, {
  //       method: "DELETE"
  //     })
  //       .then(response => {
  //         console.log(response);
  //         state.commit("deleteItem", payload);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
};

const mutations = {
  setGoods: (state, payload) => {
    state.goods = payload;
  }

  //   addItem(state, payload) {
  //     state.items.push(payload);
  //   },
  //   deleteItem(state, payload) {
  //     state.items = state.items.filter(item => {
  //       return payload != item._id;
  //     });
  //   }
};

export default {
  state,
  getters,
  actions,
  mutations
};
