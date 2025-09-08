import { RiDownload2Line } from "react-icons/ri";

function ExploreApps() {
    return (
        <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded shadow cursor-pointer">
                <RiDownload2Line className="text-xl" />
                <div className="flex flex-col">
                    <p className="text-base text-neutral-700">Get it on</p>
                    <h5 className="text-sm font-bold text-neutral-800">Google play</h5>
                </div>
            </li>
            <li className="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded shadow cursor-pointer">
                <RiDownload2Line  className="text-xl"/>
                <div className="flex flex-col">
                    <p className="text-base text-neutral-700">Get it on</p>
                    <h5 className="text-sm font-bold text-neutral-800">App Store</h5>
                </div>
            </li>
        </ul>
    )
}

export default ExploreApps;