// var axios = require("axios");

// async function getBreed() {
//   var config = {
//     method: "get",
//     url: `https://tih-api.stb.gov.sg/content/v1/attractions?apikey=KddaUBCZARYlmDt9pjwIRp0qpYLbycpV&uuid=${}`,
//     headers: {},
//   };

//   let result = await axios(config);
//   return new Promise((resolve) => {
//     resolve(result.data);
//   });
// }

// export default getBreed;

import axios from 'axios';

async function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}

async function getBreed(imageSelected) {
  try {
    var file = imageSelected;
    var reader = new FileReader();
    reader.onload = function(event) {
        var base64String = event.target.result.split(',')[1];
        console.log(base64String);
        // Do something with the base64 encoded string
            // Construct the payload
        const payload = {
          image: base64String
        };
        // print the payload
        console.log(payload);

        // Make the POST request to the API endpoint
        const endpoint_url = 'https://s2bv1eqix2.execute-api.ap-southeast-2.amazonaws.com/production/predict'; // Provide your API endpoint URL
        const results = axios.post(endpoint_url, payload)
        return results;
    };
    reader.readAsDataURL(file);


  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}

export default getBreed;