import Loading from "@/components/Loading";
import GenresItem from "./GenresItem";
import { useGetGenres } from "./useGetGenres";
import Error from "@/components/Error";

function GenresLists() {
    const {genres, isError, isLoading} = useGetGenres()

    if(isLoading) return <Loading />
    if(isError) return <Error message="Data not found" />

    return (
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                genres?.map(genre => <GenresItem key={genre._id} genre={genre} />)
            }
        </div>
    )
}

export default GenresLists;