import api from './api-config';


export const getAllHousesWanted= async () => {
    const resp = await api.get('/post_house_wanteds');
    return resp.data; 
    // receives as [ 
    //   { post_house_wanted:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   { post_house_wanted:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   ]
}

export const getOneHouseWanted= async (id) => {
    const resp = await api.get(`/post_house_wanteds/${id}`);
    return resp.data;
    // receives as [ { post_house_wanted:{name:dsd, city:sds},image:{name: dsd, url:sds} } ]
}

export const postNewHouseWanted = async (data, imageInfo) => {
    // sends as data = [ { post_house_wanted:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.post('/post_house_wanteds', { post_house_wanted: data, image: imageInfo });
    return resp.data;
    // receives as post_house_wanted:{name:dsd, city:sds} but images can be added.
}

export const updateOneHouseWanted = async (id, data, imageInfo) => {
    // sends as data = [ { post_house_wanted:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.put(`/post_house_wanteds/${id}`, { post_house_wanted: data, image: imageInfo });
    return resp.data;
    // receives as post_house_wanted:{name:dsd, city:sds} but images can be added.
}

export const destroyOneHouseWanted  = async (id) => {
    const resp = await api.delete(`/post_house_wanteds/${id}`);
    return resp;
}