import axios from "axios";

const spoonacularAPI = axios.create({
    baseURL: 'https://api.spoonacular.com/',
    params: {
        apiKey: '926c78e1a1ec4b679069f980006a47c9'
    }
});

export default spoonacularAPI;
