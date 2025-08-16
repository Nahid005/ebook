import Slider from "react-slick";

function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="my-4">
            <Slider {...settings}>
                <div>
                    <img className="max-h-[500px] w-full rounded-lg" src="/assets/slider-1.png" alt="slider-one" />
                </div>
                <div>
                    <img className="max-h-[500px] w-full rounded-lg" src="/assets/slider-2.png" alt="slider-two" />
                </div>
                <div>
                    <img className="max-h-[500px] w-full rounded-lg" src="/assets/slider-3.png" alt="slider-three" />
                </div>
            </Slider>
        </div>
    )
}

export default MainSlider;