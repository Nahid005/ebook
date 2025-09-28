import { baseURL } from "@/lib/halper";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function BookSearchModal({onClose}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBooks = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${baseURL}/api/getbooks`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ search: searchTerm }) // <-- sending search term
            });

            const data = await res.json();
            if (data.data.success === 1) {
                setBooks(data.data.bookDetails);
            } else {
                setBooks([]);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
        setLoading(false);
    };

    // Auto fetch when search term changes (debounce)
    useEffect(() => {
        const delay = setTimeout(() => {
        fetchBooks();
        }, 500); // wait 0.5s after typing
        return () => clearTimeout(delay);
    }, [searchTerm]);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm">
            <div className="relative max-w-3xl mx-auto mt-28 bg-white p-5 rounded-lg">
                <div className="">
                    <input 
                        className="w-full px-4 py-3 outline-0 border-b border-b-neutral-300" 
                        type="text" 
                        name="" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search - books | author | genres..." 
                    />
                </div>

                <button className=" absolute right-4 top-4 text-2xl text-neutral-600 outline-0 transition-all duration-300 hover:text-red-500 cursor-pointer" onClick={onClose}><MdClose /></button>

                <div className="min-h-40">
                    {
                        books?.length > 0  ? (
                            <>
                                {
                                    loading && <p>Loading...</p>
                                }
                                <ul>
                                    {books?.map((book) => (
                                        <li key={book._id} className="p-2 border-b">
                                            <Link to={`/product/${book._id}`}>
                                                <img src={`${baseURL}/assets/bookImages/${book.image}`} alt={book.name} className="w-12 inline-block mr-2" />
                                                {book.name} — {book.author.name} ⭐ {book.averageRating}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-center pt-10 text-neutral-600 text-sm font-medium">No recent searches.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BookSearchModal;