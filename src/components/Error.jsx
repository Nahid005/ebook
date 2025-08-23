function Error({message}) {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-5xl text-neutral-600">404</h2>
            <p className="text-2xl font-medium text-neutral-600">{message}</p>
        </div>
    )
}

export default Error;