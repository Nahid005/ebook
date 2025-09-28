import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import BookSearchModal from "@/features/book/BookSearchModal";

function AppLayout() {
    const [isSearch, setIsSearch] = useState(false);
    const location = useLocation();

    // Close modal whenever route changes
    useEffect(() => {
        setIsSearch(false);
    }, [location.pathname]);

    return (
        <div className="flex flex-col grow min-h-screen">
            <header>
                <Header isSearch={isSearch} setIsSearch={setIsSearch} />
            </header>
            <main className="h-full w-full px-4 md:px-0 max-w-[1300px] mx-auto grow">
                <Outlet />
            </main>
            {isSearch && <BookSearchModal onClose={() => setIsSearch(false)} />}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default AppLayout;