import { HiCheck, HiOutlineDeviceMobile } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
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





    const [paymentMethods, setPaymentMethods] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sslcommerzScriptLoaded, setSslcommerzScriptLoaded] = useState(false);
    const [tranId, setTranId] = useState('');
    const navigate = useNavigate();

    // Fetch payment methods
    useEffect(() => {
        const fetchPaymentMethods = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/payment_gateway', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            const { data } = await response.json();
            if (data.success && data.paymentMethod[0]?.sslcommerz?.sslcommerz_is_enable) {
            setPaymentMethods(data.paymentMethod[0].sslcommerz);
            } else {
            onError('SSLCOMMERZ is not enabled');
            }
        } catch (error) {
            console.error('Error fetching payment methods:', error);
            onError('Failed to load payment methods');
        }
        };
        fetchPaymentMethods();
    }, [onError]);

    // Load SSLCOMMERZ script
    useEffect(() => {
        if (paymentMethods && !sslcommerzScriptLoaded) {
        const script = document.createElement('script');
        script.src =
            paymentMethods.sslcommerz_mode === 'liveMode'
            ? `https://seamless-epay.sslcommerz.com/embed.min.js?${Math.random()
                .toString(36)
                .substring(7)}`
            : `https://sandbox.sslcommerz.com/embed.min.js?${Math.random()
                .toString(36)
                .substring(7)}`;
        script.async = true;
        script.onload = () => setSslcommerzScriptLoaded(true);
        script.onerror = () => onError('Failed to load SSLCOMMERZ script');
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            setSslcommerzScriptLoaded(false);
        };
        }
    }, [paymentMethods, sslcommerzScriptLoaded, onError]);

    // Open SSLCOMMERZ popup
    const openSslcommerzPopup = useCallback(
        (gatewayPageURL, tranId) => {
        if (!window.SSLCommerz || !sslcommerzScriptLoaded) {
            onError('SSLCOMMERZ script not loaded. Please try again.');
            return;
        }

        const popup = window.open(
            gatewayPageURL,
            'SSLCOMMERZ',
            'width=500,height=600,scrollbars=yes,resizable=yes'
        );

        if (!popup) {
            alert('Please allow popups for this site to proceed with payment.');
            navigate(`/payment-fallback?tran_id=${tranId}&gateway=${gatewayPageURL}`);
            return;
        }

        const checkPopupClosed = setInterval(() => {
            if (popup.closed) {
            clearInterval(checkPopupClosed);
            console.log('SSLCOMMERZ popup closed');
            }
        }, 500);
        },
        [sslcommerzScriptLoaded, onError, navigate]
    );

    // Handle Payment
    const handlePayment = async () => {
        setLoading(true);
        try {
        const endpoint = paymentType === 'BOOK' ? '/purchasebooks' : '/usersubscription';
        const body =
            paymentType === 'BOOK'
            ? { user.id, books: items, paymentmode: 'SSLCOMMERZ' }
            : { user.id, subscriptionplanId: items, paymentmode: 'SSLCOMMERZ' };

        const response = await fetch(`http://localhost:5000/api${endpoint}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(body),
        });

        const { data } = await response.json();
        if (data.success) {
            setTranId(data.tran_id);
            openSslcommerzPopup(data.GatewayPageURL, data.tran_id);
            onSuccess(data.tran_id);
        } else {
            onError(data.message);
        }
        } catch (error) {
        onError('Payment initiation failed');
        }
        setLoading(false);
    };

















    // function handlePurchase() {
    //     const paymentInfo = {
    //         userId: user?.id, 
    //         books: bookIds, 
    //         paymentmode: "SSLCOMMERZ"
    //     }

        
    // }

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
                onClick={handlePayment}
                disabled={loading || !sslcommerzScriptLoaded}
            >
                {loading ? 'Processing...' : 'Pay Now'} {currencyFormator(cartTotalPrice)}
            </button>
        </div>
    )
}

export default CheckoutDetails;