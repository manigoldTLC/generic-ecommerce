import axios from "axios";

export const api = axios.create({
	baseURL: 'https://raw.githubusercontent.com/manigoldTLC/generic-ecommerce/master/db.json'
});