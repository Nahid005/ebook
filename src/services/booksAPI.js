import { baseURL } from "@/lib/halper";

//Get all books
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
        console.log("Get books error", error.message);
        throw error;
    }
}

//Get popular books
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
        console.log("Get popular books error", error.message);
        throw error;
    }
}

//Get Tranding books
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
        console.log("Get tranding books error", error.message);
        throw error;
    }
}

//Get book details
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
        console.log("Get book details error", error.message);
        throw error;
    }
}

//Add favourite book
export async function addFavouriteBook(favObj, token) {

    //Authentication token
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
            throw new Error(`Failed to add favourite book: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Add favourite book error", error.message);
        throw error;
    }
}

//Get favourite book
export async function getFavouriteBook(userId, token) {

    //Authentication token
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
            throw new Error(`Failed to fetch get favourite book: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get favourite book error: ", error.message);
        throw error;
    }
}

//Remove favourite book
export async function removeFavouriteBook(favObj, token) {

    //Authentication token
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
            throw new Error(`Failed to fetch remove favourite book: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Remove favourite book error", error.message);
        throw error;
    }
}