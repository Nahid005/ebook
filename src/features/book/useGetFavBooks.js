import { getFavouriteBook } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export function useGetFavBooks() {
    const user = useSelector(state => state.user.user);
    const token = useSelector(state => state.user.token)

    const {data: getFavBook, isLoading, isError} = useQuery({
        queryKey: ['favouritebook'],
        queryFn: () => getFavouriteBook(user?.id, token),
        select: (res) => res.data.favouriteBookDetails ?? []
    })

    return {getFavBook, isLoading, isError}
}