import Products from "../product/Products";

const genre = {
    id: 1,
    image: "/assets/recipe.jpg",
    title: "Recipe",
    stock: 150,
}


function GenresWiseBooksLists() {
    const {image, title, stock} = genre;

    return (
        <div className="">
            <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 my-4 border-b border-b-neutral-200 pb-3">
                <div className="">
                    <img className="rounded-md" src={image} alt={title} />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="text-2xl font-bold text-neutral-600">{title}</h4>
                    <p className="text-sm text-neutral-600 font-medium"><span className="text-lg font-bold">{stock}</span> Books</p>
                </div>
            </div>
            <div className="">
                <h4 className="font-bold text-neutral-600 text-2xl my-4">All books in Recipe</h4>
                <Products />
            </div>
        </div>
    )
}

export default GenresWiseBooksLists;