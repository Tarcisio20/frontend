import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oministack-backand.herokuapp.com',
})

export default api