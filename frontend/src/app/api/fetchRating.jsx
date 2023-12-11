import fetchAxios from "@/lib/fetchAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify";

export const rateOccasion = (occaion) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async (occaion) => {
            await fetchAxios.post('/rate', occaion)
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
                    console.log(error);
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
            queryClient.invalidateQueries(["infOccasions"])
        }
    })
}