import { Link } from "react-router-dom";
import { RiDownload2Fill, RiLogoutBoxRLine, RiSettings3Line, RiUserStarLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";

function Sidebar() {
    return (
        <ul className="flex flex-col gap-2 min-h-full">
            <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/profile"><RiUserStarLine /> Profile</Link></li>
            <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/favouritebooks"><MdFavorite /> Favourite</Link></li>
            <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/download"><RiDownload2Fill /> Download</Link></li>
            <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/setting"><RiSettings3Line /> Setting</Link></li>
            <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/signout"><RiLogoutBoxRLine /> Signout</Link></li>
        </ul>
    )
}   

export default Sidebar;