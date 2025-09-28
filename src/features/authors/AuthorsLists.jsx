import Loading from "@/components/Loading";
import AuthorsList from "./AuthorsList";
import { useGetAuthors } from "./useGetAuthors";
import Error from "@/components/Error";


function AuthorsLists() {
    const {authors, error, isError, isLoading, refetch} = useGetAuthors();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                authors?.map(author => <AuthorsList key={author._id} author={author} />)
            }
        </div>
    )
}

export default AuthorsLists;