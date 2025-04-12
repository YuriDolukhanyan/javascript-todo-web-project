const API_URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
const API_URL_GUESS = 'https://api.nationalize.io/';

// ?name=test

const guessNationByName = async (name) => {
    return fetch(`${API_URL_GUESS}?name=${name}`)
};

const getUSPopulationByYear = async () => {
    return fetch(API_URL);
};

export { getUSPopulationByYear, guessNationByName };
