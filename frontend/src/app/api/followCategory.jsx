import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const followUnfollowCategory = (categoryId) => {
    fetchAxios.post('/follow-unfollow-category', categoryId)
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

export const getCategoryFollowers = () => {
    return useQuery({
        queryKey: ['categoryFollowers'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('/followed-categories')
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data.data;
        }
    })
}