import axiosClient from "./axiosClient";

const register = async (data) => {
    console.log(data);
    return await axiosClient.post('/register', data);
}

const login = async (data) => {
    return await axiosClient.post('/login', data);
}

const getInfo = async (userId) => {
    return await axiosClient.get(`/user/info/${userId}`);
}


export { register, login, getInfo };