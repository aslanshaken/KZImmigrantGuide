import api from './api-config';

export const loginUser = async (loginData) => {
    try {
        const resp = await api.post('/auth/login', { authentication: loginData })  // go to back end, pass over new info and return response
        localStorage.setItem('authToken', resp.data.token); // update local storage token with new user
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}` // update api token
        return resp.data.user // return just create user info
    } catch (e) {
        throw (e)
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken'); // get from local storage authToken and saves into token variable
    if (token) { // if token exists, then do below
        api.defaults.headers.common.authorization = `Bearer ${token}` //update api
        const resp = await api.get('/auth/verify'); // get from back end
        return resp.data // return data
    }
    return null
}

export const removeToken = () => {
    api.defaults.headers.common.authorization = null
}

/////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////


export const getAllUsers = async () => {
    const resp = await api.get('/users');
    return resp.data
    // receives as [ 
    //   { user:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   { user:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   ]
}

export const getOneUser = async (id) => {
    const resp = await api.get(`/users/${id}`)
    return resp.data
    // receives as [ user:{name:dsd, city:sds}, image:{name: dsd, url:sds} ]
}


export const registerUser = async (registerData, imageInfo) => { // receives 1 object and 1 image
    try {
        const resp = await api.post('/users/', { user: registerData, image: imageInfo }) // pass to route 1 object and 1 image
        localStorage.setItem('authToken', resp.data.token); // updates local storage token
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}` // updates api token
        return resp.data // return response
    } catch (e) {
        throw (e)
    }
}

export const updateOneUser = async (id, data, imageInfo) => {

    const formData = new FormData();
    formData.append('image', imageInfo)

    const resp = await api.put(`/users/${id}`, { user: data, image: imageInfo });
    return resp.data;
}

export const destroyOneUser = async (id) => {
    const resp = await api.delete(`/users/${id}`);
    return resp;
}