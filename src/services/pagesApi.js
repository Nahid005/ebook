const baseURL = import.meta.env.VITE_BASE_URL;

export async function getPages() {
    try {
        const response = await fetch(`${baseURL}/api/getpages`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        if(!response.ok) {
            throw new Error("Internal Server Error");
        }

        const data = response.json();
        
        return data;
    } catch(error) {
        console.log(error)
    }
}