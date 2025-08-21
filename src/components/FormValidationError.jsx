function FormValidationError({error}) {
    return (
        <>
            {
                error && <p className="text-sm text-red-600">{error.message}</p>
            }
        </>
    )
}

export default FormValidationError;