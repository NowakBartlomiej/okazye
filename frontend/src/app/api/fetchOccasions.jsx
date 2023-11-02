import fetchAxios from "@/lib/fetchAxios"
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const createOccasions = (occasion) => {
    fetchAxios.post('/occasions', occasion).catch((error) => {
        throw new Error(error);
    });
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

export const getInfiniteOccasions = () => {
    return useInfiniteQuery({
        queryKey: ['infOccasions'],
        queryFn: async ({pageParam = 1}) => {
            const result = await fetchAxios
            .get(`occasions?page=${pageParam}`)
            .catch((error) => {
                throw new Error(error);
              });
        
            return result.data;
        },
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}