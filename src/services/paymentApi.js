import { baseURL, token } from "@/lib/halper";

export async function PurchaseBooks(paymentInfo) {
    try {
        const response = await fetch(`${baseURL}/api/purchasebooks`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(paymentInfo)
        })
            
        if(!response.ok) {
            throw new Error(`Failed to fetch payment: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("payment error:", error.message);
        throw error;
    }
}