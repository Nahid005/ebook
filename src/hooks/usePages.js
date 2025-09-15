import { getPages } from "@/services/pagesApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function usePages() {
    const [pages, setPages] = useState({});

    const {mutate, isError, isPending} = useMutation({
        mutationFn: getPages,
        onSuccess: (data) => {
            setPages(data.data.pagesDetails[0])
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    return {pages, isError, isPending}
}