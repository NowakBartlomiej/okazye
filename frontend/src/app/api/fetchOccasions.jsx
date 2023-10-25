import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from '@tanstack/react-query';

export const getOccasions = () => {
    return useQuery({
        queryKey: ['occasions'],
        queryFn: async () => {
            const result = await fetchAxios
            .get('occasions')
            .catch((error) => {
                throw new Error(error);
              });
        
            return result.data;
        }
    })
}