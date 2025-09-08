import { baseURL } from "@/lib/halper";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "./cartSlice";

function CartItem({book}) {
    const dispatch = useDispatch();
    const {id, bookName, author, image, totalPrice} = book;

    function handleRemoveItem(id) {
        dispatch(deleteCartItem(id));
    }

    return (
        <div className="flex gap-2 bg-neutral-100 p-2 w-full rounded shadow grow">
            <img className="w-15 rounded-md" src={`${baseURL}/assets/bookImages/${image}`} alt={bookName} />
            <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-neutral-600">{bookName}</p>
                <p className="text-sm text-neutral-600">{author.name}</p>
                <div className="flex justify-between items-center h-full">
                    <span className="font-bold text-xl text-neutral-600">{totalPrice}</span>
                    <span className="cursor-pointer" onClick={() => handleRemoveItem(id)}><HiOutlineTrash /></span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;