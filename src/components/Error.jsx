import { AlertTriangle } from "lucide-react";

function Error({error, reset}) {
    if (!error) return null;

    return (
        <div className="p-4 border border-red-300 bg-red-50 rounded-lg flex items-start gap-3">
        <AlertTriangle className="text-red-500 w-5 h-5 mt-1" />
        <div className="flex-1">
            <p className="text-sm text-red-700 font-medium">Something went wrong</p>
            <p className="text-xs text-red-600">{error.message || "Unknown error"}</p>
        </div>
        {reset && (
            <button
            onClick={reset}
            className="ml-2 px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:bg-red-600"
            >
            Retry
            </button>
        )}
        </div>
    );
}

export default Error;
