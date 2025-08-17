import PublisherList from "./PublisherList";

const publishers = [
    {
        id: 1,
        image: "/assets/recipe.jpg",
        title: "Boiaro",
        stock: 150,
    },
    {
        id: 2,
        image: "/assets/selfdevelopment.jpg",
        title: "Bornno Prokash Ltd.",
        stock: 150,
    },
    {
        id: 3,
        image: "/assets/sciencefiction.jpg",
        title: "Dyu Publication",
        stock: 0,
    },
    {
        id: 4,
        image: "/assets/comic.jpg",
        title: "Pearl Publications",
        stock: 150,
    },
    {
        id: 5,
        image: "/assets/drama.jpg",
        title: "Shams Publications",
        stock: 100,
    }
]

function PublishersLists() {
    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                publishers.map(publisher => <PublisherList key={publisher.id} publisher={publisher} />)
            }
        </div>
    )
}

export default PublishersLists;