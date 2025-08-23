import { Link } from "react-router-dom";

function GenresItem({genre}) {
    const {_id: id, name, image, stock = 10} = genre;

    return (
        <Link to={`/genres/${id}`}>
            <div className="flex gap-2 justify-start items-center bg-orange-100 py-3 px-4 rounded shadow">
                <img className="w-20 h-20 rounded-full" src={image} alt={name} />
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-neutral-600 text-md">{name}</h4>
                    <p>
                        <span className={`${stock > 0 ? 'bg-green-300 ' : 'bg-red-300'} px-3 py-1 text-sm font-medium rounded-xl inline-block w-auto`}>{stock} Books</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default GenresItem;