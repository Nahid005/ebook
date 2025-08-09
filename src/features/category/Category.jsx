import Slider from "react-slick";
import CategoryItem from "./CategoryItem";

const categoryItems = [
    {
        id: 1,
        image: "/assets/recipe.jpg",
        title: "Recipe",
        stock: 150,
    },
    {
        id: 2,
        image: "/assets/selfdevelopment.jpg",
        title: "Self Development",
        stock: 150,
    },
    {
        id: 3,
        image: "/assets/sciencefiction.jpg",
        title: "Science Fiction",
        stock: 0,
    },
    {
        id: 4,
        image: "/assets/comic.jpg",
        title: "Comic",
        stock: 150,
    },
    {
        id: 5,
        image: "/assets/drama.jpg",
        title: "Drama",
        stock: 100,
    }
]

function Category() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };


    return (
        <div className="">
            <Slider {...settings}>
                {categoryItems.map(item => <CategoryItem key={item.id} item={item} />)}
            </Slider>
        </div>
    )
}

export default Category;