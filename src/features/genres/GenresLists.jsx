import Loading from "@/components/Loading";
import GenresItem from "./GenresItem";
import { useGetGenres } from "./useGetGenres";
import Error from "@/components/Error";

function GenresLists() {
    const {genres, isError, isPending} = useGetGenres()


    if(isPending) return <Loading />
    if(isError) return <Error message={"Internal Server Error"} />

    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                genres?.map(genre => <GenresItem key={genre._id} genre={genre} />)
            }
        </div>
    )
}

export default GenresLists;