import { Link, useLocation } from "react-router-dom";

function NavItems({menu, closeNavbar}) {
    const location = useLocation();
    const {name, path } = menu;

    return (
        <li 
            onClick={closeNavbar}
            className={`hover:text-orange-400 ease-in-out duration-300 ${location.pathname === path ? 'text-orange-400': 'text-neutral-600'} cursor-pointer font-medium pb-2 md:pb-0 border-b border-neutral-200 md:border-0 `}
        >
            <Link to={path}>{name}</Link>
        </li>
    )
}

export default NavItems;