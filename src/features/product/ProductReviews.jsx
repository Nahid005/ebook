import ProductReview from "./ProductReview";

const reviews = [
    {
        id: 1,
        name: "Archita Marma",
        image: "https://s3.us-west-2.amazonaws.com/boitoi/media/profile/9bfca3b8-4929-4562-b777-44cc7f7ce8bf_sm.png",
        rating: 4,
        review: "আমি বইটি কিনেছি কিন্তু পড়তে পারছিনা লেখিকা আপু।",
        date: new Date().toLocaleString()
    },
    {
        id: 2,
        name: "Taha Afrin",
        image: "https://s3.us-west-2.amazonaws.com/boitoi/media/profile/9bfca3b8-4929-4562-b777-44cc7f7ce8bf_sm.png",
        rating: 5,
        review: "প্র্যতেকটা জুটি আমার খুব ভালবাসার এদের পড়ে কোন দিন বিরক্ত আসে না ✨মন চায় পড়তেই থাকি",
        date: new Date().toLocaleString()
    },
    {
        id: 3,
        name: "Sadia Binte Salam",
        image: "https://s3.us-west-2.amazonaws.com/boitoi/media/profile/9bfca3b8-4929-4562-b777-44cc7f7ce8bf_sm.png",
        rating: 5,
        review: "আমার ভিষন পছন্দের একটা গল্প। আমি খুব আদর নিয়ে ওদের পড়ি 🥰",
        date: new Date().toLocaleString()
    },
]


function ProductReviews() {
    return (
        <div className="flex flex-col gap-4">
            {
                reviews.map(review => <ProductReview key={review.id} reviewItem={review} />)
            }
        </div>
    )
}

export default ProductReviews;