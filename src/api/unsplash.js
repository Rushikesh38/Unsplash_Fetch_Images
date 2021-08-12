import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GldSCKY31WSlDoFbap1lOx-ALDLlcVnn-alXU2nynbc'
    }
});