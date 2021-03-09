import api from './api-config';


export const getAllHousePosts= async () => {
    const resp = await api.get('/post_houses');
    return resp.data;
}

export const getOneHousePost= async (id) => {
    const resp = await api.get(`/post_houses/${id}`);
    return resp.data;
}

export const postNewHouse = async (Data) => {
    const resp = await api.post('/post_houses', { post_house: Data });
    return resp.data;
}

export const updateOneHousePost = async (id, Data) => {
    const resp = await api.put(`/post_houses/${id}`, { post_house: Data });
    return resp.data;
}

export const destroyOneHousePost  = async (id) => {
    const resp = await api.delete(`/post_houses/${id}`);
    return resp;
}