import fetchAxios from "@/lib/fetchAxios"
import { useQuery } from "@tanstack/react-query"

export const getPortalStats = () => {
    return useQuery({
        queryKey: ['portalStats'],
        queryFn: async () => {
            const result = await fetchAxios
                .get('/stats')
                .catch((error) => {
                    throw new Error(error)
                })

            return result.data.data[0]
        }
    })
}