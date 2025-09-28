import MainSlider from "@/components/MainSlider";
import GenresSlider from "@/features/genres/GenresSlider";
import PopularBooks from "@/features/book/PopularBooks";
import TrandingBooks from "@/features/book/TrandingBooks";
import AppPromotion from "@/components/AppPromotion";
import NewBooks from "@/features/book/NewBooks";

function Home() {

    return (
        <>
            <MainSlider />
            <GenresSlider />
            <NewBooks />
            <PopularBooks />
            <TrandingBooks />
            <AppPromotion />
        </>
    )
}

export default Home;