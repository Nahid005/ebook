import { HiOutlineTrash } from "react-icons/hi";

function CartItem({product}) {
    const {title, author, image, price} = product;

    return (
        <div className="flex gap-2 bg-neutral-100 p-2 w-full rounded shadow grow">
            <img className="w-15 rounded-md" src={image} alt={title} />
            <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-neutral-600">{title}</p>
                <p className="text-sm text-neutral-600">{author}</p>
                <div className="flex justify-between items-center h-full">
                    <span className="font-bold text-xl text-neutral-600">{price}</span>
                    <span><HiOutlineTrash /></span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;