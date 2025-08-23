function Loading() {
    return (
        <div className="flex items-center h-screen justify-center backdrop-blur-sm">
            <div
                className="
                w-12 h-12 rounded-full border-4 border-orange-400 border-t-transparent 
                animate-spin
                "
            ></div>
        </div>
    )
}

export default Loading;