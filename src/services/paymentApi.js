import { baseURL } from "@/lib/halper";

//Purchase Initialize
export async function purchaseBooks(paymentInfo, token) {

    //Authentication token
    if (!token) {
        throw new Error("No token found in localStorage");
    }

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
            throw new Error(`Failed to fetch purchase initialize: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("purchase initialize error:", error.message);
        throw error;
    }
}

//Transection Statatus checking
export async function transectionStatus(tranId, token) {

    //Authentication token
    if (!token) {
        throw new Error("No token found in localStorage");
    }
    
    try {
        const response = await fetch(`${baseURL}/api/transaction/status`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({tran_id: tranId})
        })
            
        if(!response.ok) {
            throw new Error(`Failed to fetch payment status: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Payment status error:", error.message);
        throw error;
    }
}


