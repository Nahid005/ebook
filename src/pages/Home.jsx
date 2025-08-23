import MainSlider from "@/components/MainSlider";
import GenresSlider from "@/features/genres/GenresSlider";
import PopularBooks from "@/features/book/PopularBooks";
import TrandingBooks from "@/features/book/TrandingBooks";

function Home() {

    return (
        <>
            <MainSlider />
            <GenresSlider />
            <PopularBooks />
            <TrandingBooks />
        </>
    )
}

export default Home;