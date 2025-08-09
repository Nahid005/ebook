import Slider from "react-slick";

function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="my-4">
            <Slider {...settings}>
                <div>
                    <img className="max-h-[500px] w-full" src="/assets/slider-one.webp" alt="slider-one" />
                </div>
                <div>
                    <img className="max-h-[500px] w-full" src="/assets/slider-two.webp" alt="slider-two" />
                </div>
                <div>
                    <img className="max-h-[500px] w-full" src="/assets/slider-three.webp" alt="slider-three" />
                </div>
            </Slider>
        </div>
    )
}

export default MainSlider;