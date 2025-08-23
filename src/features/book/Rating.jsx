import { RiStarFill, RiStarLine } from "react-icons/ri";

function Rating({rating}) {
    const stars = [];

    for(let i = 0; i < 5; i++) {
        stars.push(rating > i ? <RiStarFill key={i} className="text-amber-400 text-sm" /> : <RiStarLine key={i} className="text-amber-400 text-sm" />)
    }

    return (
        <>
            {stars}
        </>
    )
}

export default Rating;