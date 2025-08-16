import MainSlider from "@/components/MainSlider";
import Category from "@/features/category/Category";
import Products from "@/features/product/Products";
import Testimonial from "@/features/review/Testimonial";

function Home() {
    return (
        <>
            <MainSlider />
            <Category />
            <Products />
            <Testimonial />
        </>
    )
}

export default Home;