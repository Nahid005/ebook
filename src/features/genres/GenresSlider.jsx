import Slider from "react-slick";
import GenresItem from "./GenresItem";
import { useGetGenres } from "./useGetGenres";

function GenresSlider() {
    const {genres, isError, isPending} = useGetGenres()

    if(isPending) return <p>Loadding...</p>
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="py-10">
            <Slider {...settings}>
                {
                    genres?.map(genre => <GenresItem key={genre._id} genre={genre} />)
                }
            </Slider>
        </div>
    )
}

export default GenresSlider;