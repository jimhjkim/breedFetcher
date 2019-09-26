const request = require('request');

let userInput = process.argv.slice(2); // -> should be array with single element (breed)

const breedFetcher = function(breed) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) throw `Unsuccessful API request: ${error}`;
    if (data[0] === undefined) throw 'Breed not found';
    return console.log(data[0].description);
  });
};
breedFetcher(userInput[0]);