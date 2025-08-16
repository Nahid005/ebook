import { HiCheck, HiOutlineDeviceMobile } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const productsList = [
    {
        id: 1,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 5,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    },
    {
        id: 2,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 4,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    },
    {
        id: 3,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 5,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    },
    {
        id: 4,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 3,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    },
    {
        id: 5,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 5,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    }
]


function CheckoutDetails() {
    return (
        <div className="my-10 flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-neutral-700 mb-4">Checkout</h4>
            <h5 className="text-lg font-medium text-neutral-700 mb-2">Your Shops Items</h5>

            <div className="grid md:grid-cols-4 xl:grid-cols-5 gap-3">
                {
                    productsList.map(product => <CartItem key={product.id} product={product} />)
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
                        <p className="text-lg font-medium text-neutral-600">Discount()</p>
                        <p className="text-lg font-medium text-neutral-600">150</p>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-b-neutral-200 p-4">
                        <p className="text-lg font-medium text-neutral-600">Subtotal()</p>
                        <p className="text-lg font-medium text-neutral-600">150</p>
                    </div>
                    <div className="flex justify-between gap-2 px-4 py-2">
                        <p className="text-xl font-bold text-neutral-600">Total</p>
                        <p className="text-xl font-bold text-neutral-600">150</p>
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
            <Button className="bg-green-600 font-bold text-base p-5 rounded hover:bg-green-700">Complete Purchase BDT 123</Button>
        </div>
    )
}

export default CheckoutDetails;