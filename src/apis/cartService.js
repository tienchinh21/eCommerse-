import axiosClient from "./axiosClient";

const addCart = async (data) => {
    const res = await axiosClient.post('/cart', data);
    return res.data;
}

const getCart = async (userId) => {
    const res = await axiosClient.get(`/cart/${userId}`);
    return res.data;
}


const removeCart = async (body) => {
    const res = await axiosClient.delete(`/cart/deleteItem`, {
        data: body
    }

    );
    return res.data;
}
export { addCart, getCart, removeCart };