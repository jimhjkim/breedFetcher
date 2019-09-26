// index.js --- user-facing logic
const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv.slice(2)[0]; // -> should be array with single element (breed)

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});