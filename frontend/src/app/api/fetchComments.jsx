import fetchAxios from "@/lib/fetchAxios"
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";

export const getComments = (occasionId) => {
    return useInfiniteQuery({
        queryKey: ['comments', occasionId],
        queryFn: async ({ pageParam = 1 }) => {
            const result = await fetchAxios
                .get(`comments/${occasionId}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnMount: true,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const createComment = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async (comment) => {
            await fetchAxios.post('/comments', comment)
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
                    toast(error.response.data.message, {
                        type: 'error',
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
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["comments"])
        }
    })
}

// export const createComment = (comment) => {
//     fetchAxios.post('/comments', comment)
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
//         toast(error.response.data.message, {
//             type: 'error',
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         })
//     });
// }
