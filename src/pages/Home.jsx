import MainSlider from "@/components/MainSlider";
import Category from "@/features/category/Category";
import Products from "@/features/product/Products";

function Home() {
    return (
        <>
            <MainSlider />
            <Category />
            <Products />
        </>
    )
}

export default Home;