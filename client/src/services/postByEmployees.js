import api from './api-config';


export const getAllPostsByEmployee= async () => {
    const resp = await api.get('/post_by_employees');
    return resp.data;
}

export const getOnePostByEmployee= async (id) => {
    const resp = await api.get(`/post_by_employees/${id}`);
    return resp.data;
}

export const postNewEmployee = async (Data) => {
    const resp = await api.post('/post_by_employees', { post_by_employee: Data });
    return resp.data;
}

export const updateOneEmployeePost = async (id, Data) => {
    const resp = await api.put(`/post_by_employees/${id}`, { post_by_employee: Data });
    return resp.data;
}

export const destroyOneEmployeePost  = async (id) => {
    const resp = await api.delete(`/post_by_employees/${id}`);
    return resp;
}