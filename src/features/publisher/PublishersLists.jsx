import Loading from "@/components/Loading";
import PublisherList from "./PublisherList";
import { useGetPublisher } from "./useGetPublisher";
import Error from "@/components/Error";

function PublishersLists() {
    const {publishers, error, isError, isLoading, refetch} = useGetPublisher();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />;

    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                publishers.map(publisher => <PublisherList key={publisher._id} publisher={publisher} />)
            }
        </div>
    )
}

export default PublishersLists;