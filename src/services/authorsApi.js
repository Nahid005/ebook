import { baseURL } from "@/lib/halper";

//Get all authors
export async function getAuthors() {
    try {
        const response = await fetch(`${baseURL}/api/getauthors`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch authors: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get all authors error: ", error.message);
        throw error;
    }
}

//Get author details
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
            throw new Error(`Failed to fetch authors details: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get author details error: ", error.message);
        throw error;
    }
}

//Get author wise books
export async function getBooksByAuthor(id) {
    try {
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
    }catch(error) {
        console.log("Get author wise books error: ", error.message);
        throw error;
    }
}