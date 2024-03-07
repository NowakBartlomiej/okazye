import fetchAxios from "@/lib/fetchAxios"
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation"

export const createOccasion = (occasion) => {
    const queryClient = useQueryClient();
    const router = useRouter()

    return useMutation({
        mutationFn: async (occasion) => {
            await fetchAxios.post('/occasions', occasion)
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
                    toast("Niepoprawne dane", {
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
                    throw error
                })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["infOccasions"]);
            router.back();
        }
    })
}

export const updateOccasion = () => {
    const queryClient = useQueryClient();
    const router = useRouter()

    return useMutation({
        mutationFn: async (occasion) => {
            await fetchAxios.put(`/occasions/${occasion.id}`, occasion)
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
                toast("Niepoprawne dane", {
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
                throw error
            })
        },
        onSuccess: () => {
            Promise.all([
                queryClient.invalidateQueries(["occasions"]),
                queryClient.invalidateQueries(["userOccasions"])
            ])
            router.back();
        }
    })
}

export const deleteOccasion = (occasionId) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (occasionId) => {
            await fetchAxios.delete(`/occasions/${occasionId}`)
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
                    toast("Niepoprawne dane", {
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
                    console.log(error);
                })
        },
        onSuccess: () => {
            toast("Usunięto okazję", {
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
            Promise.all([
                queryClient.invalidateQueries(["occasions"]),
                queryClient.invalidateQueries(["userOccasions"])
            ])
        }
    })

}

export const getOccasion = (occasionId) => {
    return useQuery({
        queryKey: ['occasion', occasionId],
        queryFn: async () => {
            const result = await fetchAxios
                .get(`occasions/${occasionId}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        }
    })
}

export const getOccasions = (pageParam = 1) => {
    return useQuery({
        queryKey: ['occasions'],
        queryFn: async () => {
            const result = await fetchAxios
                .get(`occasions?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        }
    })
}

export const getInfiniteOccasions = (slug) => {
    return useInfiniteQuery({
        queryKey: ['infOccasions', slug],
        queryFn: async ({ pageParam = 1 }) => {
            const result = await fetchAxios
                .get(`${slug}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const getUserOccasions = () => {
    return useInfiniteQuery({
        queryKey: ['userOccasions'],
        queryFn: async ({ pageParam = 1 }) => {
            const result = await fetchAxios
                .get(`my-occasions?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const getOccasionsByCategory = (categoryId) => {
    return useInfiniteQuery({
        queryKey: ['occasionsByCategory', categoryId],
        queryFn: async ({ pageParam = 1 }) => {
            const result = await fetchAxios
                .get(`occasions-by-category/${categoryId}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 2 * (60 * 1000),
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const getSuggestedOccasions = (categoryId) => {
    return useQuery({
        queryKey: ['suggestedOccasions', categoryId],
        queryFn: async () => {
            const result = await fetchAxios
                .get(`suggested-occasions/${categoryId}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        enabled: !!categoryId
    })
}