import { getPages } from "@/services/pagesApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function TermsAndCondition() {

    const [pages, setPages] = useState(null);

    const {mutate, isError, isPending} = useMutation({
        mutationFn: getPages,
        onSuccess: (data) => {
            setPages(data)
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    useEffect(() => {
        mutate()
    }, [])


    console.log(pages)

    return (
        <h1> Terms and Condition</h1>
    )
}

export default TermsAndCondition;