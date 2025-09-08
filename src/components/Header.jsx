import { HiMenu, HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import NavItems from "./NavItems";
import { useSelector } from "react-redux";

const menus = [
    {
        id: 1,
        name: "Books",
        path: "/books"
    },
    {
        id: 2,
        name: "Genres",
        path: "/genres"
    },
    {
        id: 3,
        name: "Authors",
        path: "/authors"
    },
    {
        id: 4,
        name: "Publishers",
        path: "/publishers"
    }
]

function Header() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems)

    function toggleNavbar() {
        setOpen((open) => !open)
    }

    function closeNavbar() {
        setOpen(false)
    }

    function handleScroll() {
        if(window.scrollY > 100) {
            setIsScrolled(true)
        }else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className={` w-full h-[8ch] backdrop-blur-sm md:static top-0 z-50 ${isScrolled ? 'fixed bg-sky-50/30 border-b border-neutral-200': 'bg-orange-100'} flex justify-center text-center`}>
            
            <div className={` w-full h-[8ch] backdrop-blur-sm flex items-center justify-between px-4 md:px-0 fixed top-0 transition-all ease-in-out duration-300 z-50 max-w-[1300px] mx-auto`}>

                {/* Logo section */}

                <div className="flex items-center gap-2 md:pr-16 pr-0">
                    <Link to="/" className="font-bold">
                    #BOIARO
                    </Link>
                </div>

                {/* Hamburger Menu for mobile / toggle menu */}
                <div className="md:hidden flex gap-2">
                    <button className="w-fit px-4 py-2 rounded hover:bg-orange-200 md:text-base text-2xl text-neutral-800 hover:text-orange-700 ease-in-out duration-300 cursor-pointer">
                        <HiOutlineSearch />
                    </button>
                    <button className="relative w-fit px-4 py-2 rounded hover:bg-orange-200 md:text-base text-2xl text-neutral-800 hover:text-orange-700 ease-in-out duration-300 cursor-pointer">
                        <MdOutlineShoppingCart />
                        {
                            cartItems.length > 0 && <span className=" absolute right-0 top-0 bg-orange-400 text-sm w-5 h-5 rounded-full font-bold text-white">{cartItems.length}</span>
                        }
                    </button>

                    <button onClick={toggleNavbar} className="text-neutral-600 focus:outline-none cursor-pointer">
                        <HiMenu className="font-bold text-2xl text-neutral-600" />
                    </button>
                </div>
                {/* Navbar items and buttons */}
                <div className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-1 md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none  ease-in-out duration-300 transition-transform md:translate-x-0 flex-1 ${open ? 'translate-x-0' : 'translate-x-full'} z-50`}>

                    {/* Logo and close icon */}
                    <div className="w-full md:hidden flex items-center justify-between px-4">
                        <Link className="font-bold" to="/"> #BOIARO </Link>
                        <div className="md:hidden flex justify-end py-6">
                            <button onClick={closeNavbar} className="text-neutral-600 focus:outline-none">
                                <HiOutlineX className="font-bold text-red-600 text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-neutral-300 md:hidden"></div>

                    {/* Navbar Items and button */}
                    <div className="flex-1 flex items-left  flex-col md:flex-row justify-between gap-6 p-6 md:p-0 ">
                        <ul className="flex flex-col md:flex-row items-left md:items-center md:gap-7 gap-2 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
                            {menus.map(menu => <NavItems key={menu.id} menu={menu} closeNavbar={closeNavbar} />)}
                        </ul>

                        {/* navbar bottom */}
                        <div className="flex flex-row justify-left md:flex-row items-center gap-4">
                            <button className="w-fit px-4 py-2 rounded hover:bg-orange-200 md:text-base text-2xl text-neutral-800 hover:text-orange-700 ease-in-out duration-300 cursor-pointer hidden md:block">
                                <HiOutlineSearch />
                            </button>

                            <Link to="/checkout">
                                <button className="relative w-fit px-4 py-2 rounded hover:bg-orange-200 md:text-base text-2xl text-neutral-800 hover:text-orange-700 ease-in-out duration-300 cursor-pointer hidden md:block">
                                    <MdOutlineShoppingCart />
                                    {
                                        cartItems.length > 0 && <span className=" absolute right-0 top-0 bg-orange-400 text-sm w-5 h-5 rounded-full font-bold text-white">{cartItems.length}</span>
                                    }
                                </button>
                            </Link>

                            <button className="w-fit px-6 py-2 rounded-full bg-orange-300 hover:bg-orange-400  md:text-base text-lg font-medium text-neutral-800 hover:text-neutral-800 ease-in-out duration-300 cursor-pointer">
                                <Link to="/signin">Signin</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;