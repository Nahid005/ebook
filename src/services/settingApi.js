import { baseURL } from "@/lib/halper";

//Get settings
export async function getSetting() {
    try {
        const response = await fetch(`${baseURL}/api/getsettings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch setting: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Get setting error", error.message);
        throw error;
    }
}