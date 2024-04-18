async function fetchJSONData() {
    const response = await fetch('./stanford_dog_breeds_from_wisdom_panel.json');
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

export default fetchJSONData;