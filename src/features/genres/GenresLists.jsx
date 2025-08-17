import GenresItem from "./GenresItem";
import { useEffect } from "react";

const genres = [
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

function GenresLists() {

    useEffect(() => {
        
        async function getGenres() {
            try {
                const response = await fetch(`https://ebook.boiaro.com/api/getcategories`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                })

                if(!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`)
                }

                const data = await response.json();

                console.log(data)

                return data;
            }catch(error) {
                console.log(error)
            }
        }

        getGenres();


    }, [])

    return (
        <div className="py-10 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
                genres.map(genre => <GenresItem key={genre.id} genre={genre} />)
            }
        </div>
    )
}

export default GenresLists;