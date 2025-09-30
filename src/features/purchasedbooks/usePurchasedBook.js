import { getBookDetails, userPurchasedBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function usePurchasedBook() {
    const token = useSelector(state => state.user.token);
    const user = useSelector(state => state.user.user);

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['purchasedbooks'],
        queryFn: () => userPurchasedBooks(user.id, token),
        select: (res) => res.data.purchaseDetails
    })

    return {purchasedBooks: data ?? [], error, isError, isLoading, refetch}
}

export function usePurchasedBookDetails() {
    const {bookId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: [''],
        queryFn: () => getBookDetails(bookId),
        select: (res) => res.data.bookDetails
    })


    return {purchasedBookDetails: data ?? [], error, isError, isLoading, refetch}
}
