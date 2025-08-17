export async function getBooks() {
    try {
        const response = await fetch(`${baseURL}/GetPopularBooks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
        });

        return response;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error; // or handle it as needed
    }
}