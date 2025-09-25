import { addFavouriteBook } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export function useAddFavBook() {
    const queryClient = useQueryClient();
    const token = useSelector(state => state.user.token)

    const {mutate: mutateFavBook, isPending, isError} = useMutation({
        mutationFn: (favObj) => addFavouriteBook(favObj, token),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['favouritebook']})
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.message)
        }
    })

    return {mutateFavBook, isPending, isError}
}