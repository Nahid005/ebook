import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <ul className="flex flex-col gap-2 min-h-full">
            <li className="font-medium text-neutral-600 text-md"><Link to="/profile">Profile</Link></li>
            <li className="font-medium text-neutral-600 text-md"><Link to="/changepassword">Password Change</Link></li>
            <li className="font-medium text-neutral-600 text-md"><Link to="/setting">Setting</Link></li>
            <li className="font-medium text-neutral-600 text-md"><Link to="/signout">Signout</Link></li>
        </ul>
    )
}   

export default Sidebar;