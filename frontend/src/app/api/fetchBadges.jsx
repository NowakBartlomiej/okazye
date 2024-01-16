import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from "@tanstack/react-query"

export const getBadges = () => {
    return useQuery({
        queryKey: ['badges'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('user-badges')
                .catch((error) => {
                    throw new Error(error);
                  });
            
                return result.data.data[0];
        }
    })
}