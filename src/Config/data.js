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

export function cartDeleteData(id) {
    return axios.delete(`http://localhost:8000/cart/${id}`);
}

export function newGetData({page,limit,order}) {
    return axios.get(`http://localhost:8000/new`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}

export function shopallGetData({page,limit,order}) {
    return axios.get(`http://localhost:8000/shopall`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}
export function searchGetData({page,limit,order}) {
    return axios.get(`http://localhost:8000/allproducts`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}
