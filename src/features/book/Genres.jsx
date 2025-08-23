import Genre from "./Genre"

function Genres({genres}) {
    return (
        <div className="flex flex-wrap gap-2 justify-start mb-4">
            {
                genres.map((genre, index) => <Genre key={index} genre={genre} /> )
            }
        </div>
    )
}

export default Genres