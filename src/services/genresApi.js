const baseURL = import.meta.env.VITE_BASE_URL;

export async function getGenres() {
    try {
        const response = await fetch(`${baseURL}/api/getcategories`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        if(!response.ok) {
            throw new Error("Internal Server Error");
        }

        const data = await response.json();
        
        return data;
    }catch(error) {
        console.log(error)
    }
}

export async function getBooksGenreWise(id) {
    try {
        const response = await fetch(`${baseURL}/api/getbookbycategory`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({categoryId: id})
        })

        if(!response.ok) {
            throw new Error("Books not found")
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}