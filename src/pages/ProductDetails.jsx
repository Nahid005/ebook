import { HiBuildingOffice2, HiCalendarDays, HiMiniDocumentText, HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

import ProductGallery from "@/features/product/ProductGallery"
import Rating from "@/features/product/Rating";
import Genres from "@/features/product/Genres";
import { currencyFormator } from "@/lib/halper";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import ProductReviews from "@/features/product/ProductReviews";

const product = {
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

function ProductDetails() {

    const {image, title, author, publishBy, publishDate, pages, price, description, language, genres, ratings} = product;

    return (
        <div className="grid gap-2 md:grid-cols-2 md:gap-8">
            <ProductGallery galleryImage={image} title={title} />
            <div className="md:my-4">
                <h2 className="text-2xl font-bold text-neutral-600">{title}</h2>
                <p className="text-base font-bold text-neutral-600">{author}</p>
                <div className="flex items-center justify-start gap-2 my-2">
                    <div className="flex items-center justify-start">
                        <Rating rating={ratings} />
                    </div>
                    <span className="text-neutral-600">{ratings} </span>
                    <span className="text-neutral-500">(103 ratings)</span>
                </div>
                <Genres genres={genres} />
                <div className="bg-orange-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-8 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <HiCalendarDays className="text-2xl text-neutral-700" />
                        <p className="text-sm text-neutral-600 font-bold m-0">Published</p>
                        <h4 className="text-base text-neutral-600 font-bold">{publishDate}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <HiOutlineGlobeAsiaAustralia className="text-2xl text-neutral-700" />
                        <p className="text-sm text-neutral-600 font-bold m-0">Language</p>
                        <h4 className="text-base text-neutral-600 font-bold">{language}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <HiMiniDocumentText className="text-2xl text-neutral-700" />
                        <p className="text-sm text-neutral-600 font-bold m-0">Pages</p>
                        <h4 className="text-base text-neutral-600 font-bold">{pages}</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <HiBuildingOffice2 className="text-2xl text-neutral-700" />
                        <p className="text-sm text-neutral-600 font-bold m-0">Published by</p>
                        <h4 className="text-base text-neutral-600 font-bold">{publishBy}</h4>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-8 py-8">
                    <h2 className="font-bold text-2xl text-neutral-700">{currencyFormator(price)}</h2>
                    <div className="flex justify-end gap-2">
                        <Button className="cursor-pointer bg-neutral-600 rounded py-5 px-4 font-bold text-md hover:bg-neutral-700"><HiOutlineShare /> <span>Share</span></Button>

                        <Button className="cursor-pointer bg-green-500 rounded py-5 px-4 font-bold text-md hover:bg-green-600"><MdOutlineShoppingCart /> <span>Add to cart</span></Button>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <h4 className="font-bold text-xl text-neutral-600">About this book</h4>
                    <article className="mb-10">
                        {description}
                    </article>
                </div>
                <div className="">
                    <h4 className="font-bold text-xl text-neutral-700 mb-5">Reviews (70)</h4>
                    <ProductReviews />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails