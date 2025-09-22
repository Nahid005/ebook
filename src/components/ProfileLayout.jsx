
import Sidebar from "@/features/profile/Sidebar";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
    return (
        <div className="grid grid-cols-[300px_1fr] gap-2 my-4">
            <aside className="bg-orange-100 p-5 rounded-md">
                <Sidebar />
            </aside>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default ProfileLayout;