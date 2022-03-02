import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    timeout: 1000,
});

export default instance;