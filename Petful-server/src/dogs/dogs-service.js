const store = require('../store');

const dogsService = {
  getDog() {
    return store.dogs.peek();
  },
  deleteDog() {
    if (store.dogs && store.adopters) {
      store.history.enqueue({
        animal: store.dogs.peek(),
        adopter: store.adopters.peek()
      });
      store.adopters.dequeue();
      store.dogs.dequeue();
      if (store.dogs.isEmpty()) {
        store.populateDogs();
      }
      return store.dogs.peek();
    }
  }
};

module.exports = dogsService;
