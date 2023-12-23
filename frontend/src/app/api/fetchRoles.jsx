import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from "@tanstack/react-query"

export const hasAdminRole = () => {
    return useQuery({
        queryKey: ['hasAdminRole'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('/has-admin-role')
                .catch((error) => {
                    throw new Error(error)
                });
            
            return result.data.hasRole;
        }
    })
}