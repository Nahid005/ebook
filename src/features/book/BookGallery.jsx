import { baseURL } from "@/lib/halper";

function BookGallery({galleryImage, title}) {
    return (
        <div className="flex justify-center items-center md:max-h-[600px] bg-orange-100 rounded-lg p-8 my-4 md:sticky top-0">
            <img className="max-w-80 rounded-lg" src={`${baseURL}/assets/bookImages/${galleryImage}`} alt={title} />
        </div>
    )
}

export default BookGallery;