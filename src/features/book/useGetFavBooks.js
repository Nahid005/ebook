import { user } from "@/lib/halper";
import {getFavouriteBook } from "@/services/booksAPI";
import {useQuery } from "@tanstack/react-query";

export function useGetFavBooks() {
    const {data: getFavBook, isLoading, isError} = useQuery({
        queryKey: ['favouritebook'],
        queryFn: () => getFavouriteBook(user?.id),
        select: (res) => res.data.favouriteBookDetails ?? []
    })

    return {getFavBook, isLoading, isError}
}