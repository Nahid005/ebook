import { removeFavouriteBook } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useRemoveFevBook() {
    const queryClient = useQueryClient();

    const {mutate: mutateRemoveFavBook, isError, isPending} = useMutation({
        mutationFn: (favObj) => removeFavouriteBook(favObj),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book']});
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {mutateRemoveFavBook, isError, isPending}
}