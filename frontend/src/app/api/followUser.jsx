import fetchAxios from "@/lib/fetchAxios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useFollowUnfollowUser = (userId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (userId) => {
            await fetchAxios.post('/follow-unfollow-user', userId)
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
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['userFollowers'])
        }
    })

    // fetchAxios.post('/follow-unfollow-user', userId)
    //     .then((response) => {
    //         toast(response.data.message, {
    //             type: 'success',
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         })
    //     })
    //     .catch((error) => {
    //         throw new Error(error);
    //     });
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

export const getFollowedUsers = () => {
    return useQuery({
        queryKey: ['followedUsers'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('/get-followers')
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        }
    })
}