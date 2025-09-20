import { baseURL } from "@/lib/halper";
import { Link } from "react-router-dom";

function PublisherList({publisher}) {

    const {_id, name, image, since_year} = publisher;

    return (
        <Link to={`/publisherdetails/${_id}`}>
            <div className="flex gap-2 justify-start items-center bg-orange-100 py-3 px-4 rounded mx-2 shadow">
                <img className="w-20 h-20 rounded-full" src={`${baseURL}/assets/userImages/${image}`} alt={name} />
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-neutral-600 text-md">{name}</h4>
                    {/* <p>
                        <span className={`${stock > 0 ? 'bg-green-300 ' : 'bg-red-300'} px-3 py-1 text-sm font-medium rounded-xl inline-block w-auto`}>{stock} Books</span>
                    </p> */}
                    <p>{since_year}</p>
                </div>
            </div>
        </Link>
    )
}

export default PublisherList;