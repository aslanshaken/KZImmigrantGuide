import api from './api-config';


export const getAllHousesForRent= async () => {
    const resp = await api.get('/post_houses');
    return resp.data; 
    // receives as [ 
    //   { post_house:{name:dsd, city:sds}, images:[ {filename:fdfd, url:sds}, {filename:fdfd, url:sds} ] },
    //   { post_house:{name:dsd, city:sds}, images:[ {filename:fdfd, url:sds}, {filename:fdfd, url:sds} ] },
    //   ]
}

export const getOneHouseForRent= async (id) => {
    const resp = await api.get(`/post_houses/${id}`);
    return resp.data;
    // receives as [ post_house:{name:dsd, city:sds}, images:[ {filename:fdfd, url:sds}, {filename:fdfd, url:sds} ] ]
}

export const postNewHouseForRent = async (data,imagesInfo) => {
    // sends as data = [ post_house:{name:dsd, city:sds}, images:[ {photo_name: value, photo_size: value }, {photo_name: value, photo_size: value } ] ]
    const resp = await api.post('/post_houses', { post_house: data, images: imagesInfo  });
    return resp.data;
    // receives as post_house:{name:dsd, city:sds} but images can be added.
}

export const updateOneHouseForRent = async (id, data, imagesInfo) => {
    // sends as data = [ post_house:{name:dsd, city:sds}, images:[ {photo_name: value, photo_size: value }, {photo_name: value, photo_size: value } ] ]
    const resp = await api.put(`/post_houses/${id}`, { post_house: data, images: imagesInfo  });
    return resp.data;
     // receives as post_house:{name:dsd, city:sds} but images can be added.
}

export const destroyOneHouseForRent  = async (id) => {
    const resp = await api.delete(`/post_houses/${id}`);
    return resp;
}