import api from './api-config';


export const getAllJobsForEmployee = async () => {
    const resp = await api.get('/get_employees');
    return resp.data;
}

export const getOneJobForEmployee= async (id) => {
    const resp = await api.get(`/get_employees/${id}`);
    return resp.data;
}

export const postNewJobForEmployee = async (Data) => {
    const resp = await api.post('/get_employees', { get_employee: Data });
    return resp.data;
}

export const updateOneJobForEmployee = async (id, Data) => {
    const resp = await api.put(`/get_employees/${id}`, { get_employee: Data });
    return resp.data;
}

export const destroyOneJobForEmployee = async (id) => {
    const resp = await api.delete(`/get_employees/${id}`);
    return resp;
}