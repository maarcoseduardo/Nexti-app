import axios from "axios";

export const apiPeoples = axios.create({
    baseURL: 'https://desafioreact.s3.amazonaws.com/menu/itens.json',
})