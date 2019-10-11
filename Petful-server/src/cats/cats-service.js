const store = require('../store');

const catsService = {
  getCat() {
    return store.cats.peek();
  },
  deleteCat() {
    if (store.cats && store.adopters) {
      store.history.enqueue({
        animal: store.cats.peek(),
        adopter: store.adopters.peek()
      });
      store.adopters.dequeue();
      store.cats.dequeue();
      if (store.cats.isEmpty()) {
        store.populateCats();
      }
      return store.cats.peek();
    }
  }
};

module.exports = catsService;
