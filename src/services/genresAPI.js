import { baseURL } from "@/lib/halper";

export async function getGenres() {
    try {
        const response = await fetch(`https://ebook.boiaro.com/api/getcategories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })

        if(!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`)
        }

        const data = await response.json();

        return data;
    }catch(error) {
        console.log(error)
    }
}