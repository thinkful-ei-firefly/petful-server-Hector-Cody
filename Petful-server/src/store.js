const queue = require('./queue');

const store = {
  dogs: [],
  cats: [],
  history: [],
  adopters: [],
  populateDogs: function() {
    const dogs = new queue();
    dogsArray.forEach(dog => dogs.enqueue(dog));
    store.dogs = dogs;
  },
  populateCats: function() {
    const cats = new queue();
    catsArray.forEach(cat => cats.enqueue(cat));
    store.cats = cats;
  }
};

// add dogs to store

const dogsArray = [
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retriever listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL:
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1491058588000/photosp/0f083c97-0ab1-44ae-bd2e-a0efc22a21b2/stock-photo-dog-cute-dalmatian-cute-dog-cute-puppy-dally-beautiful-dog-cute-dalmatian-spotty-dog-0f083c97-0ab1-44ae-bd2e-a0efc22a21b2.jpg',
    imageDescription: 'A happy dalmatian.',
    name: 'Maxwell',
    sex: 'Female',
    age: 7,
    breed: 'Dalmatian',
    story: 'Found on the streets'
  },
  {
    imageURL:
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1448071322000/photosp/4f831e9c-a50e-4ca1-ad8f-e911ecfdcb2a/stock-photo-portrait-dog-animals-pet-beautiful-amazing-nyc-4f831e9c-a50e-4ca1-ad8f-e911ecfdcb2a.jpg',
    imageDescription: 'An English Bulldog holding a rubber basketball toy.',
    name: 'Lennon',
    sex: 'Male',
    age: 12,
    breed: 'English Bulldog',
    story: 'given up by owner'
  }
];

store.populateDogs();

// add cats to store

const catsArray = [
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1442817304000/photosp/d46bf60d-f216-4aad-b388-8d4fcf697b5e/stock-photo-animal-orange-animals-cat-pet-persiancat-animal-captures-d46bf60d-f216-4aad-b388-8d4fcf697b5e.jpg',
    imageDescription: 'Orange persian kitten.',
    name: 'Garfield',
    sex: 'Male',
    age: 1,
    breed: 'Persian',
    story: 'Too crazy for previous owner'
  },
  {
    imageURL:
      'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1466432945000/photosp/324b81b3-df52-4292-8b42-5ab4f8d503cc/stock-photo-animals-cat-cute-kitten-pet-fur-kitty-siamese-meow-324b81b3-df52-4292-8b42-5ab4f8d503cc.jpgg',
    imageDescription: 'Gray and beige siamese cat sitting on a cat tower .',
    name: 'Jax',
    sex: 'Female',
    age: 6,
    breed: 'Siamese',
    story: 'Abandoned'
  }
];
store.populateCats();

// add adopters to store

const adopters = new queue();

store.adopters = adopters;

// add history to store

const history = new queue();

store.history = history;

module.exports = store;
