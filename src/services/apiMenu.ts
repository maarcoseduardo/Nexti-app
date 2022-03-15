import axios from 'axios';

export const apiMenu = axios.create({
    baseURL: 'https://desafioreact.s3.amazonaws.com/menu/menu.json',
})