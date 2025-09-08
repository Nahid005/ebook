function BookSearchModal() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto mt-28 bg-white p-5 rounded-lg">
                <div className="">
                    <input className="w-full px-4 py-3 outline-0 border-b border-b-neutral-300" type="text" name="" id="" placeholder="Search - books | author | genres..." />
                </div>

                <div className="min-h-40">
                    <p className="text-center pt-10 text-neutral-600 text-sm font-medium">No recent searches.</p>
                </div>
            </div>
        </div>
    )
}

export default BookSearchModal;