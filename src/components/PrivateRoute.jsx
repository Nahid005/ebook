import { token } from "@/lib/halper";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    if(!token) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

export default PrivateRoute;