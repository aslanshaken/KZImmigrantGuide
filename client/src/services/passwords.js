import api from './api-config';

export const forgotPassword = async (userEmail) => {
    try {
        const resp = await api.post('password/forgot', { email: userEmail } )
        return resp.data.alert  // true or false ?
    } catch (e) {
        throw (e) // maybe false? 
    }
}

export const resetPassword = async (resetInfo) =>{ // data :{token:1234,email:mail@gmail.com,password:123}
    try{
        const resp = await api.post('password/reset', {data: resetInfo} )
        return resp.data.alert // true or false ?
    } catch(e){
        throw (e)
    }
}