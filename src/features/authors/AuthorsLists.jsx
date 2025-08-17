import AuthorsList from "./AuthorsList";

const authors = [
    {
        id: 1,
        image: "/assets/recipe.jpg",
        title: "Bankim Chandra Chattopaddhay",
        stock: 150,
    },
    {
        id: 2,
        image: "/assets/selfdevelopment.jpg",
        title: "Sharat Chandra Chattopadhay",
        stock: 150,
    },
    {
        id: 3,
        image: "/assets/sciencefiction.jpg",
        title: "Abanlndranath Tagore",
        stock: 0,
    },
    {
        id: 4,
        image: "/assets/comic.jpg",
        title: "Bibhutibhushan Bandopadhay",
        stock: 150,
    },
    {
        id: 5,
        image: "/assets/drama.jpg",
        title: "Jibanananda Das",
        stock: 100,
    }
]

function AuthorsLists() {
    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                authors.map(author => <AuthorsList key={author.id} author={author} />)
            }
        </div>
    )
}

export default AuthorsLists;