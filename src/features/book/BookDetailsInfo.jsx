import { 
    HiBuildingOffice2, 
    HiCalendarDays, 
    HiMiniDocumentText, 
    HiOutlineGlobeAsiaAustralia 
} from "react-icons/hi2";

import ProductGallery from "@/features/book/ProductGallery"
import Rating from "@/features/book/Rating";
import { currencyFormator, token } from "@/lib/halper";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import ProductReviews from "@/features/book/ProductReviews";
import { useBookDetails } from "./useBookDetails";
import Loading from "@/components/Loading";
import { useBookReview } from "./useBookReview";
import DOMPurify from "dompurify";
import PdfPreview from "./PdfPreview";

function BookDetailsInfo() {
    const {bookDetails, isLoading, isError} = useBookDetails();
    const {bookReview, isError: reviewError, isLoading: reviewLoading} = useBookReview();
    
    if(isLoading || reviewLoading) return <Loading />
    if (isError || reviewError) return <div>Something went wrong!</div>;

    const {
        image, 
        name, 
        author, 
        access_type, 
        language,  
        reviews, 
        category, 
        subcategory, 
        description,
        pdf,
        averageRating,
        publishBy = "Boiaro",
        pages = 100,
        publishDate = "12-12-12"
    } = bookDetails.at(0)

    const bookDescription = DOMPurify.sanitize(description || "");

    return (
        <div className="grid gap-2 md:grid-cols-2 md:gap-8">
            <ProductGallery galleryImage={image} title={name} />
            <div className="md:my-4">
                <PdfPreview fileUrl={pdf} />
                <h2 className="text-2xl font-bold text-neutral-600">{name}</h2>
                <p className="text-base font-bold text-neutral-600">{author.name}</p>
                <div className="flex items-center justify-start gap-2 my-2">
                    <div className="flex items-center justify-start">
                        <Rating rating={averageRating} />
                    </div>
                    <span className="text-neutral-600">{averageRating} </span>
                    <span className="text-neutral-500">({bookReview?.length} ratings)</span>
                </div>
                
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
                    <h2 className="font-bold text-2xl text-neutral-700">{currencyFormator(120)}</h2>
                    <div className="flex justify-end gap-2">
                        <Button className="cursor-pointer bg-neutral-600 rounded py-5 px-4 font-bold text-md hover:bg-neutral-700"><HiOutlineShare /> <span>Share</span></Button>
                        <Button className="cursor-pointer bg-green-500 rounded py-5 px-4 font-bold text-md hover:bg-green-600"><MdOutlineShoppingCart /> <span>Add to cart</span></Button>
                    </div>
                </div>
                <div className="flex gap-2 flex-col">
                    <h4 className="font-bold text-xl text-neutral-600">About this book</h4>
                    <article className="mb-10" dangerouslySetInnerHTML={{ __html: bookDescription }}>
                    </article>
                </div>
                <div className="">
                    <h4 className="font-bold text-xl text-neutral-700 mb-5">Reviews ({bookReview?.length})</h4>
                    {
                        token ? <ProductReviews bookReview={bookReview} /> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default BookDetailsInfo;