import MainSlider from "@/components/MainSlider";
import GenresSlider from "@/features/genres/GenresSlider";
import PopularBooks from "@/features/book/PopularBooks";
import TrandingBooks from "@/features/book/TrandingBooks";
import AppPromotion from "@/components/AppPromotion";

function Home() {

    return (
        <>
            <MainSlider />
            <GenresSlider />
            <PopularBooks />
            <TrandingBooks />
            <AppPromotion />
        </>
    )
}

export default Home;