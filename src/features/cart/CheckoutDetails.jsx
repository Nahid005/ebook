import { HiCheck, HiOutlineDeviceMobile } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { totalPrice } from "./cartSlice";
import { currencyFormator } from "@/lib/halper";
import { useInitializePayment } from "./useInitializePayment";

function CheckoutDetails() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartTotalPrice = useSelector(totalPrice)
    const user = useSelector(state => state.user.user)
    const {initializePayment, isPending} = useInitializePayment();
    const bookIds = cartItems?.length > 0 && cartItems.map(book => book.id);

    function handlePurchase() {
        const paymentInfo = {
            userId: user?.id, 
            books: bookIds, 
            paymentmode: "SSLCOMMERZ"
        }

        initializePayment(paymentInfo)
    }

    return (
        <div className="my-10 flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-neutral-700 mb-4">Checkout</h4>
            <h5 className="text-lg font-medium text-neutral-700 mb-2">Your Shops Items</h5>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">

                {
                    cartItems.length > 0 && cartItems.map(book => <CartItem key={book.id} book={book} />)
                }
            </div>

            <div className="grid md:grid-cols-2 gap-2 py-10">
                <div className="">
                    <h4 className="font-bold text-lg text-neutral-500 mb-4">Apply Cupon</h4>
                    <div className="flex">
                        <Input className="max-w-50 rounded" placeholder="Apply cupon" />
                        <Button className="rounded">Apply</Button>
                    </div>

                    <h4 className="font-bold text-lg text-neutral-500 mb-4">Payment Method</h4>

                    <div className="bg-orange-100 p-4 rounded-md w-full flex items-center justify-between">
                        <div className="flex justify-start items-center gap-2">
                            <HiOutlineDeviceMobile className="text-3xl text-neutral-600" />
                            <div className="flex flex-col gap-1">
                                <h4 className="text-lg font-bold text-neutral-600">Local payment</h4>
                                <p className="text-neutral-600 text-sm font-medium">bKash, Nagad, Rocket, Credit, and Debit cards</p>
                            </div>
                        </div>
                        <HiCheck className="text-2xl text-green-600" />
                    </div>

                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between gap-2 border-b border-b-neutral-200 p-4">
                        <p className="text-lg font-medium text-neutral-600">Discount</p>
                        <p className="text-lg font-medium text-neutral-600"></p>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-b-neutral-200 p-4">
                        <p className="text-lg font-medium text-neutral-600">Subtotal</p>
                        <p className="text-lg font-medium text-neutral-600">{currencyFormator(cartTotalPrice)}</p>
                    </div>
                    <div className="flex justify-between gap-2 px-4 py-2">
                        <p className="text-xl font-bold text-neutral-600">Total</p>
                        <p className="text-xl font-bold text-neutral-600">{currencyFormator(cartTotalPrice)}</p>
                    </div>
                </div>
            </div>


            <div className="flex gap-2 items-center">
                <input className="text-neutral-600" type="checkbox" name="ebookConfirm" id="ebookConfirm" />
                <label className="text-base font-medium text-neutral-600" htmlFor="ebookConfirm">I understand that i am purchasing ebooks, not physical books.</label>
            </div>
            <div className="flex gap-2 items-center">
                <input className="text-neutral-600" type="checkbox" name="tramsCondition" id="tramsCondition" />
                <label className="text-base font-medium text-neutral-600" htmlFor="tramsCondition">I agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link></label>
            </div>

            <button
            className="bg-green-600 font-bold text-base p-5 rounded hover:bg-green-700"
                onClick={handlePurchase}
                disabled={isPending || !cartItems?.length > 0}
            >
                {isPending ? 'Processing...' : 'Pay Now'} {currencyFormator(cartTotalPrice)}
            </button>
        </div>
    )
}

export default CheckoutDetails;