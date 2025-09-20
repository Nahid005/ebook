import { addFavouriteBook } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddFavBook() {
    const queryClient = useQueryClient();

    const {mutate: mutateFavBook, isPending, isError} = useMutation({
        mutationFn: (favObj) => addFavouriteBook(favObj),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['favouriteBooks']})
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
        }
    })

    return {mutateFavBook, isPending, isError}
}