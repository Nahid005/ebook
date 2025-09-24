import BookReview from "./BookReview";

function BookReviews({bookReview}) {
    return (
        <div className="flex flex-col gap-4">
            {
                bookReview?.map(review => <BookReview key={review._id} reviewItem={review} />)
            }
        </div>
    )
}

export default BookReviews;