import api from './api-config';

export const loginUser = async (loginData) => {
    try {
        const resp = await api.post('/auth/login', { authentication: loginData })
        localStorage.setItem('authToken', resp.data.token);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
        return resp.data.user
    } catch (e) {
        throw (e)
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return null
}

export const removeToken = () => {
    api.defaults.headers.common.authorization = null
}

/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////


export const getAllUsers = async()=>{
    const resp = await api.get('/users');
    return resp.data
    // receives as [ 
    //   { user:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   { user:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   ]
}

export const getOneUser = async(id) =>{
    const resp = await api.get(`/users/${id}`)
    return resp.data
     // receives as [ user:{name:dsd, city:sds}, image:{name: dsd, url:sds} ]
}


export const registerUser = async (registerData, imageInfo) => {
    try {
        const resp = await api.post('/users/', { user: registerData, image: imageInfo })
        localStorage.setItem('authToken', resp.data.token);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
        return resp.data.user
    } catch (e) {
        throw (e)
    }
}

export const updateOneUser = async (id, data, imageInfo) => {
    // sends as data = [ { user:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.put(`/users/${id}`, { user: data, image: imageInfo });
    return resp.data;
    // receives as user:{name:dsd, city:sds} but images can be added.
}

export const destroyOneUser = async (id) => {
    const resp = await api.delete(`/users/${id}`);
    return resp;
}