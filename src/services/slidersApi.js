import { baseURL } from "@/lib/halper";

//Get slider images
export async function getSliders() {
    try {
        const response = await fetch(`${baseURL}/api/getsliders`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        })

        if(!response.ok) {
            throw new Error(`Failed to get sliders: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get Slider error", error.message);
        throw error;
    }
}