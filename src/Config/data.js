import axios from "axios";

export function loginData(postData) {
    return axios.post(`${process.env.REACT_APP_URL}/login`, postData);
}
export function loginGetData() {
    return axios.get(`${process.env.REACT_APP_URL}/login`);
}

export function loginSuccessData(postData) {
    return axios.post(`${process.env.REACT_APP_URL}/loginsuccess`, postData);
}

export function homeGetData() {
    return axios.get(`${process.env.REACT_APP_URL}/home`);
}


export function cartData(postData) {
    return axios.post(`${process.env.REACT_APP_URL}/cart`, postData);
}
export function cartGetData() {
    return axios.get(`${process.env.REACT_APP_URL}/cart`);
}

export function cartDeleteData(id) {
    return axios.delete(`${process.env.REACT_APP_URL}/cart/${id}`);
}

export function newGetData({page,limit,order}) {
    return axios.get(`${process.env.REACT_APP_URL}/new`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}

export function shopallGetData({page,limit,order}) {
    return axios.get(`${process.env.REACT_APP_URL}/shopall`, {
        params: {
            _sort:"price",
            _page: page,
            _limit: limit,
            _order:order
        }
    });
}
export function searchGetData({page,limit,order}) {
    return axios.get(`${process.env.REACT_APP_URL}/allproducts`, {
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
    return axios.get(`${process.env.REACT_APP_URL}/allproducts`, {
        params: {
            q:querry
        }
    });
}
