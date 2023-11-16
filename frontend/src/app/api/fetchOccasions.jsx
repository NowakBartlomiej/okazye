import fetchAxios from "@/lib/fetchAxios"
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { toast } from "react-toastify";

export const createOccasions = (occasion) => {
    fetchAxios.post('/occasions', occasion)
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
}

export const getOccasion = (occasionId) => {
    return useQuery({
        queryKey: ['occasion'],
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
        queryFn: async ({pageParam = 1}) => {
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

export const getOccasionsByCategory = (categoryId) => {
    return useInfiniteQuery({
        queryKey: ['occasionsByCategory', categoryId],
        queryFn: async ({pageParam = 1}) => {
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