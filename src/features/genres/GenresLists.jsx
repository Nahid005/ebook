import Loading from "@/components/Loading";
import GenresItem from "./GenresItem";
import { useGetGenres } from "./useGetGenres";
import Error from "@/components/Error";

function GenresLists() {
    const {genres, error, isError, isLoading, refetch} = useGetGenres()

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                genres?.map(genre => <GenresItem key={genre._id} genre={genre} />)
            }
        </div>
    )
}

export default GenresLists;