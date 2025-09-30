import { Link } from "react-router-dom";

function PurchasedBook({book}) {
    const {_id, name, price} = book?.bookDetails;
    return (
        <tbody>
            <tr className="text-center">
                <td className="py-2 px-4 border">{name}</td>
                <td className="py-2 px-4 border">{price}</td>
                <td className="py-2 px-4 border">
                    <Link to={`/purchedbooks/${_id}`}>Read Book</Link>
                </td>
            </tr>
        </tbody>
    )
}

export default PurchasedBook;