import { FaFacebook, FaGoogle } from "react-icons/fa";

function SocialLogin() {
    return (
        <div className="flex gap-4 mt-4">
            <div className="bg-orange-200 px-4 py-3 rounded-md flex justify-start items-center gap-2 w-full cursor-pointer">
                <FaGoogle className="text-neutral-600 text-lg" />
                <p className="text-neutral-600 font-medium">Google</p>
            </div>
            <div className="bg-orange-200 px-4 py-3 rounded-md flex justify-start items-center gap-2 w-full cursor-pointer">
                <FaFacebook className="text-blue-600 text-lg" />
                <p className="text-neutral-600 font-medium">Facebook</p>
            </div>
        </div>
    )
}

export default SocialLogin;