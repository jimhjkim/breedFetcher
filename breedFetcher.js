const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null); // error from request
    } else if (data[0] === undefined) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description.trim());
    }
  });
};
module.exports = { fetchBreedDescription };