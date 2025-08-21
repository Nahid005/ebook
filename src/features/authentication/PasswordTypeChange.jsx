import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordTypeChange({isShow}) {

    return (
        <>
            {isShow.password || isShow.confirmPassword ? <FaEye name="password" className="absolute right-3 top-11 z-50 cursor-pointer " /> : <FaEyeSlash name="password" className="absolute right-3 top-11 z-50 cursor-pointer " />}
        </>
    )
}

export default PasswordTypeChange;