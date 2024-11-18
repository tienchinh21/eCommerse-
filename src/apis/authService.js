import axiosClient from "./axiosClient";

const register = async (data) => {
    console.log(data);
    return await axiosClient.post('/register', data);
}

const login = async (data) => {
    return await axiosClient.post('/login', data);
}

// const getInfo = async () => {
//     return await axiosClient.get('/user/info/a610d75d-a639-458b-9961-ed7d74180caa');
// }
export { register, login };