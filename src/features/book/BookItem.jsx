import { currencyFormator } from "@/lib/halper";
import { MdOutlineShoppingCart } from "react-icons/md";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartSlice";
const baseURL = import.meta.env.VITE_BASE_URL;

function BookItem({book}) {
    const dispatch = useDispatch();
    const {_id: id, name, image, price = 10, averageRating, author} = book;

    function handleCartItem() {
        const cartItem = {
            id: id,
            bookName: name,
            image: image,
            author: author,
            quentity: 1,
            unitPrice: price,
            totalPrice: price * 1
        }

        dispatch(addCartItem(cartItem))
    }

    return (
        <div className="flex flex-col gap-2 group">
            <div className="relative overflow-hidden">
                <Link to={`/product/${id}`}>
                    <img className="rounded-lg transition-transform duration-300 group-hover:scale-105" src={`${baseURL}/assets/bookImages/${image}`} alt={name} />
                </Link>
                <div className="bg-neutral-600/50 text-center py-5 px-2 absolute w-full bottom-0 rounded-b-lg transition-all duration-300 translate-y-10 opacity-0 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 flex justify-center">
                    <button 
                        className="cursor-pointer bg-green-500 rounded py-3 px-4 font-bold text-md hover:bg-green-600 flex items-center gap-1 justify-center"
                        onClick={handleCartItem}
                    ><MdOutlineShoppingCart /> <span>Add to cart</span></button>
                </div>
            </div>
            <Link to={`/product/${id}`}>
                <div className="flex flex-col">
                    <h5 className="font-bold text-base text-neutral-700">{name}</h5>
                    <p className="font-medium text-sm text-neutral-700">{author.name}</p>
                    <div className="flex flex-col md:flex-row mt-2 gap-1">
                        <div className="flex items-center gap-1">
                            <ul className="flex">
                                <Rating rating={averageRating} />
                            </ul>
                            <p className="text-sm text-neutral-500 font-medium"><span>(108)</span></p>
                        </div>
                        <div className="flex gap-1">
                            <h4 className="text-sm font-bold text-neutral-600">{currencyFormator(price)}</h4>
                            <p className="text-sm font-medium text-red-500"><del>200</del></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BookItem;