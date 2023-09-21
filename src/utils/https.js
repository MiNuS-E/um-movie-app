import axios from "axios";

const https = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 30000,
    headers:{
        Authorization: '',
        'Content-Type': 'application/json',
    }
});

export default https;


