import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from '@tanstack/react-query';

export const getCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await fetchAxios
            .get('categories')
            .catch((error) => {
                throw new Error(error);
              });
        
            return result.data;
        }
    })
}

export const getCategory = (categoryId) => {
    return useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const result = await fetchAxios
            .get(`categories/${categoryId}`)
            .catch((error) => {
                throw new Error(error);
              });
        
            return result.data;
        }
    })
}