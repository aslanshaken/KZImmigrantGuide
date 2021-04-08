import api from './api-config';


export const getAllBlogs= async () => {
    const resp = await api.get('/blogs');
    return resp.data; 
    // receives as [ 
    //   { blog:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   { blog:{name:dsd, city:sds}, image:{name: dsd, url:sds} },
    //   ]
}

export const getOneBlog= async (id) => {
    const resp = await api.get(`/blogs/${id}`);
    return resp.data;
    // receives as [ { blog:{name:dsd, city:sds},image:{name: dsd, url:sds} } ]
}

export const postNewBlog = async (data, imageInfo) => {
    // sends as data = [ { blog:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.post('/blogs', { blog: data, image: imageInfo });
    return resp.data;
    // receives as blog:{name:dsd, city:sds} but images can be added.
}

export const updateOneBlog = async (id, data, imageInfo) => {
    // sends as data = [ { blog:{name:dsd, city:sds}, image:{photo_name: value, photo_size: value } } ]
    const resp = await api.put(`/blogs/${id}`, { blog: data, image: imageInfo });
    return resp.data;
    // receives as blog:{name:dsd, city:sds} but images can be added.
}

export const destroyOneBlog = async (id) => {
    const resp = await api.delete(`/blogs/${id}`);
    return resp;
}