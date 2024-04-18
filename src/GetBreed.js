import axios from "axios";

async function getBreed(imageSelected) {
  try {
    var file = imageSelected;
    var reader = new FileReader();

    // Define a promise to wrap the asynchronous operation
    const resultPromise = new Promise((resolve, reject) => {
      reader.onload = function (event) {
        var base64String = event.target.result.split(",")[1];
        const payload = {
          image: base64String,
        };
        const endpoint_url =
          "https://s2bv1eqix2.execute-api.ap-southeast-2.amazonaws.com/production/predict";
        // Make the POST request to the API endpoint
        axios
          .post(endpoint_url, payload)
          .then((results) => {
            // console.log(results.data['Confidence']);
            resolve(results); // Resolve the promise with the result
          })
          .catch((error) => {
            console.error("Error:", error);
            reject(error); // Reject the promise with the error
          });
      };
    });

    reader.readAsDataURL(file);

    // Wait for the promise to resolve
    const results = await resultPromise;
    return results;
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error;
  }
}

export default getBreed;
