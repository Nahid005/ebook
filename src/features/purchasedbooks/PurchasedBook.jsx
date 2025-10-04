import { baseURL } from "@/lib/halper";
import { Link } from "react-router-dom";

function PurchasedBook({book}) {
    const {_id, image, name, author, publisher} = book?.bookDetails;

    console.log(book)

    return (
        <tbody>
            <tr className="text-center">
                <td className="py-2 px-4 border"> <img className="w-12 h-12" src={`${baseURL}/assets/bookImages/${image}`} alt={name} /></td>
                <td className="py-2 px-4 border">{name}</td>
                <td className="py-2 px-4 border">{author.name}</td>
                <td className="py-2 px-4 border">{publisher.name}</td>
                <td className="py-2 px-4 border">{book.price}</td>
                <td className="py-2 px-4 border">
                    <Link to={`/purchedbooks/${_id}`}>Read Book</Link>
                </td>
            </tr>
        </tbody>
    )
}

export default PurchasedBook;