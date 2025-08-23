const baseURL = import.meta.env.VITE_BASE_URL;

export async function getAuthors() {
    try {
        const response = await fetch(`${baseURL}/api/getauthors`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        if(!response.ok) {
            throw new Error("Internal Server Error");
        }

        const data = response.json();
        
        return data;
    } catch(error) {
        console.log(error)
    }
}

export async function getAuthorDetails(id) {
    try {
        const response = await fetch(`${baseURL}/api/getauthordetails`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({authorId: id})
        })

        if(!response.ok) {
            throw new Error("Author not found")
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

export async function getBooksByAuthor(id) {
    try {
        const response = await fetch(`${baseURL}/api/getbookbyauthor`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({authorId: id})
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