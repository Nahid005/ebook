import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] bg-gray-50 px-4 text-center">
            <h1 className="text-3xl font-bold text-neutral-600 mb-4">😕 Books Not Found</h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-6">
                Sorry, the product you are looking for does not exist or may have been removed.
            </p>
            <Link
                to="/books"
                className="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors duration-300"
            >
                Browse Books
            </Link>
        </div>
    )
}

export default Notfound;