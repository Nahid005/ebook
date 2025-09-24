import { baseURL } from "@/lib/halper";

export async function getGenres() {
    try {
        const response = await fetch(`${baseURL}/api/getcategories`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch Genres: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log(error);
        throw error;
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
            throw new Error(`Failed to fetch Genres wise books: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log(error);
        throw error;
    }
}