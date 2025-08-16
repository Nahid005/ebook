import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className="flex flex-col grow min-h-screen">
            <header>
                <Header />
            </header>
            <main className="min-h-full w-full px-4 md:px-0 max-w-[1300px] mx-auto">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default AppLayout;