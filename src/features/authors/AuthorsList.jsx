import { baseURL } from "@/lib/halper";
import { Link } from "react-router-dom";

function AuthorsList({author}) {

    const {_id: id, name, image, stock} = author;
    
    return (
        <Link to={`/authors/${id}`}>
            <div className="flex gap-2 justify-start items-center bg-orange-100 py-3 px-4 rounded shadow">
                <img className="w-15 h-15 md:w-20 md:h-20 rounded-full" src={`${baseURL}/assets/userImages/${image}`} alt={name} />
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-neutral-600 text-sm md:text-md">{name}</h4>
                    <p>
                        <span className={`${stock > 0 ? 'bg-green-300 ' : 'bg-red-300'} px-3 py-1 text-[12px] md:text-sm font-medium rounded-xl inline-block w-auto`}>{stock} Books</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default AuthorsList;