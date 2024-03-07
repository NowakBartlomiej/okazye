import fetchAxios from "@/lib/fetchAxios"
import { useInfiniteQuery } from "@tanstack/react-query"

export const getSearchOccasion = (search) => {
    return useInfiniteQuery({
        queryKey: ['searchOccasions', search],
        queryFn: async ({pageParam = 1}) => {
            const result = await fetchAxios
                .get(`search-occasions/${search}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const getSearchCategories = (search) => {
    return useInfiniteQuery({
        queryKey: ['searchCategories', search],
        queryFn: async ({pageParam = 1}) => {
            const result = await fetchAxios
                .get(`search-categories/${search}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}

export const getSearchUsers = (search) => {
    return useInfiniteQuery({
        queryKey: ['searchUsers', search],
        queryFn: async ({pageParam = 1}) => {
            const result = await fetchAxios
                .get(`search-users/${search}?page=${pageParam}`)
                .catch((error) => {
                    throw new Error(error);
                });

            return result.data;
        },
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage) => (lastPage.links.next == null ? undefined : lastPage.meta.current_page + 1)
    })
}


