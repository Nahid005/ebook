import Rating from "./Rating";

function BookReview({reviewItem}) {
    const {date, description, rating, image = "google.com"} = reviewItem;

    return (
        <div className="flex justify-between gap-4">
            <div className="flex justify-start gap-2 items-start">
                <img className="w-15 h-15 rounded-full" src={image} alt="Boiaro" />
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center gap-2">
                        <h4 className="font-bold text-lg text-neutral-600">Boiaro</h4>
                        <p>{date}</p>
                    </div>
                    <div className="flex">
                        <Rating rating={rating}/>
                    </div>
                    <article className="text-neutral-600 text-sm">
                        {description}
                    </article>
                </div>
            </div>
        </div>
    )
}

export default BookReview;