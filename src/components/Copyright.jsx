import { Link } from "react-router-dom"

function Copyright() {
    return (
        <div className="bg-orange-200 text-center py-2">
            <p className="text-sm font-medium text-neutral-700">Design and develop by <strong><Link to="https://legendasoft.com/" target="_blank">Legendasoft</Link></strong></p>
        </div>
    )
}

export default Copyright