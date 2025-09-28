import { useSetting } from "@/hooks/useSetting";
import { baseURL } from "@/lib/halper";
import { Link } from "react-router-dom";

function Logo() {
    const {setting} = useSetting();
    
    return (
        <Link to="/">
            <img className="w-full max-w-[150px]" src={`${baseURL}/assets/settings/${setting?.site_logo}`} alt="" />
        </Link>
    )
}

export default Logo;