import axios from "axios";

export function loginData(postData) {
    return axios.post(`http://localhost:8000/login`, postData);
}
export function loginGetData() {
    return axios.get(`http://localhost:8000/login`);
}

export function loginSuccessData(postData) {
    return axios.post(`http://localhost:8000/loginsuccess`, postData);
}

export function homeGetData() {
    return axios.get(`http://localhost:8000/home`);
}


export function cartData(postData) {
    return axios.post(`http://localhost:8000/cart`, postData);
}
export function cartGetData() {
    return axios.get(`http://localhost:8000/cart`);
}