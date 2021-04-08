import api from './api-config';


export const getAllCommunities= async () => {
    const resp = await api.get('/communities');
    return resp.data; 
    // receives as [ 
    //   { community:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   { community:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   ]
}

export const getOneCommunity= async (id) => {
    const resp = await api.get(`/communities/${id}`);
    return resp.data;
    // receives as [ { community:{name:dsd, city:sds},image:{name: dsd, url:sds} } ]
}

export const postNewCommunity = async (data, imageInfo) => {
    // sends as data = [ { community:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.post('/communities', { community: data, image: imageInfo });
    return resp.data;
    // receives as community:{name:dsd, city:sds} but images can be added.
}

export const updateOneCommunity = async (id, data, imageInfo) => {
    // sends as data = [ { community:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.put(`/communities/${id}`, { community: data, image: imageInfo });
    return resp.data;
    // receives as community:{name:dsd, city:sds} but images can be added.
}

export const destroyOneCommunity  = async (id) => {
    const resp = await api.delete(`/communities/${id}`);
    return resp;
}