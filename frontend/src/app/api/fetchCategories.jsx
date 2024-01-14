import fetchAxios from "@/lib/fetchAxios"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
        },
        refetchOnWindowFocus: false,
        
    })
}

export const createCategory = (category) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async (category) => {
            await fetchAxios.post('/categories', category)
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
                
                console.log(error)
                throw error
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
            router.back();
        }
    })
}