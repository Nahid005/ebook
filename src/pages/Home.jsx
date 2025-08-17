import MainSlider from "@/components/MainSlider";
import Category from "@/features/category/Category";
import Products from "@/features/product/Products";
import { getBooks } from "@/services/booksAPI";

function Home() {

    console.log(getBooks())

    return (
        <>
            <MainSlider />
            <Category />
            <Products />
        </>
    )
}

export default Home;