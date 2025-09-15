import { baseURL } from "@/lib/halper";

export async function getAuthors() {
    const response = await fetch(`${baseURL}/api/getauthors`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    });

    if(!response.ok) {
        throw new Error(`Failed to fetch authors: ${response.statusText}`);
    }

    const data = response.json();
    return data;
}

export async function getAuthorDetails(id) {
    const response = await fetch(`${baseURL}/api/getauthordetails`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({authorId: id})
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch authors details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

export async function getBooksByAuthor(id) {
    const response = await fetch(`${baseURL}/api/getbookbyauthor`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({authorId: id} )
    })

    if(!response.ok) {
        throw new Error(`Failed to fetch author wise books: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}