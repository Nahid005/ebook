import { baseURL } from "@/lib/halper";

export async function getPopularBooks() {
    const response = await fetch(`${baseURL}/api/getpopularbooks`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    if(!response.ok) {
        throw new Error(`Failed to fetch popular books: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

export async function getTrandingBooks() {
    const response = await fetch(`${baseURL}/api/gettrendingbooks`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    });
    
    if(!response.ok) {
        throw new Error(`Failed to fetch tranding books: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

export async function getBookDetails(id) {
    const response = await fetch(`${baseURL}/api/getbookdetails`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        
        body: JSON.stringify({bookId: id})
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch book details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}