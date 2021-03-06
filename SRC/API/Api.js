import axios from 'axios';
export {getUser, getUsers};

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})
const getUsers = async() => {
  let {data} = await axiosInstance('/users')
    return data;

}

const getUser = async(id) => {
    let {data} = await axiosInstance(`/users${id}`)
    return data;
}

