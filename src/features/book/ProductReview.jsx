import Rating from "./Rating";

function ProductReview({reviewItem}) {
    const {name, image, rating, review, date} = reviewItem;

    return (
        <div className="flex justify-between gap-4">
            <div className="flex justify-start gap-2 items-start">
                <img className="w-15 h-15 rounded-full" src={image} alt={name} />
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-lg text-neutral-600">{name}</h4>
                    <div className="flex">
                        <Rating rating={rating}/>
                    </div>
                    <article className="text-neutral-600 text-sm">
                        {review}
                    </article>
                </div>
            </div>
            <p>{date}</p>
        </div>
    )
}

export default ProductReview;