import { baseURL } from "@/lib/halper";

//Get pages
export async function getPages() {
    try {
        const response = await fetch(`${baseURL}/api/getpages`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        if(!response.ok) {
            throw new Error(`Failed to fetch pages: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get page error: ", error.message);
        throw error;
    }
}