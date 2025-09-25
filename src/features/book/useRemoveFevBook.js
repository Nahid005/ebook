import { removeFavouriteBook } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export function useRemoveFevBook() {
    const queryClient = useQueryClient();
    const token = useSelector(state => state.user.token)

    const {mutate: mutateRemoveFavBook, isError, isPending} = useMutation({
        mutationFn: (favObj) => removeFavouriteBook(favObj, token),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['favouritebook']});
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {mutateRemoveFavBook, isError, isPending}
}