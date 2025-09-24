import { baseURL } from "@/lib/halper";
import DOMPurify from "dompurify";
import { FaFirefoxBrowser } from "react-icons/fa";
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

function AuthorInfo({authorInfo}) {
    const {
        name, 
        image, 
        since_year,
        description, 
        website_url, 
        facebook_url, 
        youtube_url, 
        instagram_url,  
    } = authorInfo

    const authorDescription = DOMPurify.sanitize(description || "");

    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-start gap-4 my-4 border-b border-b-neutral-200 pb-3">
            <div className="">
                <img className="rounded-md md:w-96" src={`${baseURL}/assets/userImages/${image}`} alt={name} />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <div className="grid grid-cols-2 justify-between gap-2 items-end w-full">
                    <div className="">
                        <h4 className="text-2xl font-bold text-neutral-600">{name}</h4>
                        <p className="text-md text-neutral-600 font-medium">Since: <span className="text-lg font-bold">{since_year}</span></p>
                    </div>
                    <div >
                        <ul className="flex justify-end flex-row items-center text-right gap-2">
                            <li>
                                <a href={facebook_url} target="_blank">
                                    <RiFacebookCircleFill className="text-2xl text-neutral-600 transition-all duration-100 hover:text-orange-400" />
                                </a>
                            </li>
                            <li>
                                <a href={instagram_url} target="_blank">
                                    <RiInstagramFill className="text-2xl text-neutral-600 transition-all duration-100 hover:text-orange-400" />
                                </a>
                            </li>
                            <li>
                                <a href={youtube_url} target="_blank">
                                    <RiYoutubeFill className="text-2xl text-neutral-600 transition-all duration-100 hover:text-orange-400" />
                                </a>
                            </li>
                            <li>
                                <a href={website_url} target="_blank">
                                    <FaFirefoxBrowser className="text-2xl text-neutral-600 transition-all duration-100 hover:text-orange-400" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-neutral-100 h-1 w-full my-2"></div>
                <h4 className="text-xl font-bold text-neutral-600">About</h4>
                <p 
                    className="text-sm text-neutral-600 font-medium"
                    dangerouslySetInnerHTML={{ __html: authorDescription?.slice(0, 500) }}
                />
            </div>
        </div>
    )
}

export default AuthorInfo;