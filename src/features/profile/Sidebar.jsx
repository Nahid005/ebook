import { Link } from "react-router-dom";
import { RiDownload2Fill, RiLogoutBoxRLine, RiSettings3Line, RiUserStarLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import { useSignout } from "../authentication/useSignout";
import Error from "@/components/Error";

function Sidebar() {
    const {signoutUser, isError, isPending} = useSignout();

    if(isError) return <Error message="something went wrong" />

    function handleSignOut() {
        signoutUser();
    }

    return (
        <div className="flex flex-col h-full grow">
            <ul className="flex flex-col gap-2 h-full">
                <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/profile"><RiUserStarLine /> Profile</Link></li>
                <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/favouritebooks"><MdFavorite /> Favourite</Link></li>
                <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/download"><RiDownload2Fill /> Download</Link></li>
                <li className="font-medium text-neutral-600 text-md p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75"><Link className="flex items-center gap-1" to="/setting"><RiSettings3Line /> Setting</Link></li>
            </ul>
            <button
                className="font-medium text-neutral-600 text-md cursor-pointer p-2 rounded-md transition-all hover:bg-orange-200 hover:duration-75 flex items-center gap-1"
                onClick={handleSignOut}
                disabled={isPending}
            >
                <RiLogoutBoxRLine /> Signout
            </button>
        </div>
    )
}   

export default Sidebar;