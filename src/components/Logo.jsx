import { useSetting } from "@/hooks/useSetting";
import { baseURL } from "@/lib/halper";

function Logo() {
    const {setting} = useSetting();
    
    return (
        <div className="">
            <img className="w-full max-w-[150px]" src={`${baseURL}/assets/settings/${setting?.site_logo}`} alt="" />
        </div>
    )
}

export default Logo;