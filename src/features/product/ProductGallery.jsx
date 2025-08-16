function ProductGallery({galleryImage, title}) {
    return (
        <div className="flex justify-center items-center md:max-h-2/3 bg-orange-100 rounded-lg p-8 my-4 sticky top-0">
            <img className="max-w-full rounded-lg" src={galleryImage} alt={title} />
        </div>
    )
}

export default ProductGallery;