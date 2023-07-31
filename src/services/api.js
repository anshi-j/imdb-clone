import axios from 'axios';

export const categoryMovies = async (API_URL) => {
    try{
        let response = await axios.get(API_URL);
        const data = response.data;
        return data; 
    } catch (error){
        console.log('Error while calling the API', error.message);
        // return error.response.data;
        return error; 
    }
} 