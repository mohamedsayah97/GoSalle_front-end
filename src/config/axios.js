import axios from 'axios';

export const Instance = axios.create({
  baseURL:'http://localhost:3000/api',
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
        'Content-Type': 'application/json',
        
        },
});

