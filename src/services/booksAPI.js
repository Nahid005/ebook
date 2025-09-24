import { baseURL, token } from "@/lib/halper";

export async function getBooks() {
    try {
        const response = await fetch(`${baseURL}/api/getbooks`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("getbooks error", error.message);
        throw error;
    }
}

export async function getPopularBooks() {
    try {
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
    }catch(error) {
        console.log("getpopular books error", error.message);
        throw error;
    }
}

export async function getTrandingBooks() {
    try {
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
    }catch(error) {
        console.log("gettranding books error", error.message);
        throw error;
    }
}

export async function getBookDetails(id) {
    try {
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
    }catch(error) {
        console.log("getbook details error", error.message);
        throw error;
    }
}

export async function getBookReview(bookId) {

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    try {
        const response = await fetch(`${baseURL}/api/getreview`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({bookId})
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch book review: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("getbookreview error", error.message);
        throw error;
    }
}

export async function addFavouriteBook(favObj) {

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    try {
        const response = await fetch(`${baseURL}/api/addfavouritebook`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(favObj)
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch book review: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("getbookreview error", error.message);
        throw error;
    }
}

export async function getFavouriteBook(userId) {

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    try {
        const response = await fetch(`${baseURL}/api/getfavouritebook`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({userId: userId})
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch book review: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("getbookreview error", error.message);
        throw error;
    }
}

export async function removeFavouriteBook(favObj) {

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    try {
        const response = await fetch(`${baseURL}/api/removefavouritebook`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(favObj)
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch book review: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("getbookreview error", error.message);
        throw error;
    }
}