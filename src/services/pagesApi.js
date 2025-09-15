import { baseURL } from "@/lib/halper";

export async function getPages() {
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
}