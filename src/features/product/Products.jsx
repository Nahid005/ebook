import Product from "./Product";

const productsList = [
    {
        id: 1,
        image: "/assets/product-image.jpg",
        title: "বিহঙ্গিনীর পিঞ্জিরা",
        author: "লামিয়া রহমান মেঘলা",
        ratings: 6,
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
        ratings: 6,
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
        ratings: 6,
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
        ratings: 6,
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
        ratings: 6,
        genres: ["ফ্যান্টাসি", "রোমান্স", "ই-বুক মেলা", "ই-বুক মেলা ২০২৫"],
        publishDate: "August 7, 2025",
        language: "বাংলা",
        pages: 172,
        publishBy: "Boiaro",
        price: 50,
        description: "একটা বদ অভ্যাস ছাড়াতে অন্য একটা বদ অভ্যাসে জড়াতে হয় বিহঙ্গিনী। শুধু তোমাতে অভ্যস্ত করে দেওয়ার কথা দিচ্ছি, সব বদ অভ্যাস ছেড়ে দেব। প্রিয় পদ্মা হৃদি।"
    }
]

function Products() {
    return (
        <div className="grid md:grid-cols-5 gap-4">
            {productsList.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default Products;