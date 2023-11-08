import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const followUnfollowUser = (userId) => {
    fetchAxios.post('/follow-unfollow-user', userId)
        .then((response) => {
            toast(response.data.message, {
                type: 'success',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        })
        .catch((error) => {
            throw new Error(error);
        });
}

export const getFollowers = () => {
    return useQuery({
        queryKey: ['userFollowers'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('/followers')
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data.data;
        }
    })
}