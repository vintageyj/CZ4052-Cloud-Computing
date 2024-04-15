import { parse } from 'papaparse';

async function fetchCSVData() {
    const response = await fetch('./stanford_dog_breeds_from_wisdom_panel.csv');
    const csvData = await response.text();
    const parsedData = parse(csvData, { header: true }); // First row contains headers
    console.log(parsedData.data);
    return parsedData.data;
}

export default fetchCSVData;