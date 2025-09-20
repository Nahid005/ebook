import ProductReview from "./ProductReview";

function ProductReviews({bookReview}) {
    return (
        <div className="flex flex-col gap-4">
            {
                bookReview?.map(review => <ProductReview key={review._id} reviewItem={review} />)
            }
        </div>
    )
}

export default ProductReviews;