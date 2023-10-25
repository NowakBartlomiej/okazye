import Axios from "axios";

const fetchAxios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default fetchAxios