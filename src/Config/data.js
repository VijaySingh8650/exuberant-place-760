import axios from "axios";

export function loginData(postData) {
    return axios.post(`https://ecommerce-fake-app.herokuapp.com/login`, postData);
}
export function loginGetData() {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/login`);
}

export function loginSuccessData(postData) {
    return axios.post(`https://ecommerce-fake-app.herokuapp.com/loginsuccess`, postData);
}

export function homeGetData() {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/home`);
}


export function cartData(postData) {
    return axios.post(`https://ecommerce-fake-app.herokuapp.com/cart`, postData);
}
export function cartGetData() {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/cart`);
}

export function cartDeleteData(id) {
    return axios.delete(`https://ecommerce-fake-app.herokuapp.com/cart/${id}`);
}

export function newGetData({page,limit,order}) {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/new`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}

export function shopallGetData({page,limit,order}) {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/shopall`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}
export function searchGetData({page,limit,order}) {
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/allproducts`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}

export function searchData(querry) {
    if (!querry) return Promise.reject("Something went wrong");
    return axios.get(`https://ecommerce-fake-app.herokuapp.com/allproducts`, {
        params: {
            q:querry
        }
    });
}
