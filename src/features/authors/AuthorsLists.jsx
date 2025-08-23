import Loading from "@/components/Loading";
import AuthorsList from "./AuthorsList";
import { useGetAuthors } from "./useGetAuthors";
import Error from "@/components/Error";


function AuthorsLists() {
    const {authors, isPending, isError} = useGetAuthors();

    if(isPending) return <Loading />
    if(isError) return <Error message={"Internal Server Error"} />

    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                authors?.map(author => <AuthorsList key={author._id} author={author} />)
            }
        </div>
    )
}

export default AuthorsLists;