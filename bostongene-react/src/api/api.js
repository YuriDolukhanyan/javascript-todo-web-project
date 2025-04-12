import { API_URL, ROUTS } from "./constants";

const fetchUsers = async () => {
    return fetch(`${API_URL}${ROUTS.USERS}`)
        .then(response => response.json())
        .then(data => console.log(data));
};

const fetchProducts = async () => {
    return fetch(`${API_URL}${ROUTS.PRODUCTS}`)
        .then(response => response.json())
        .then(data => console.log(data));
};

export { fetchUsers, fetchProducts };
