import fetchAxios from "@/lib/fetchAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useFollowUnfollowCategory = (categoryId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (categoryId) => {
            await fetchAxios.post('/follow-unfollow-category', categoryId)
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
                    return response
                })
                .catch((error) => {
                    throw new Error(error);
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["categoryFollowers"])
        }
    })
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