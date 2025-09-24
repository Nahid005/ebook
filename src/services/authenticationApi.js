import { token } from "@/lib/halper";
import { storage } from "@/lib/storage";

const baseURL = import.meta.env.VITE_BASE_URL;

//existing user checking
export async function checkRegisterUser(email) {
    try {
        const response = await fetch(`${baseURL}/api/checkregistereduser`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email: email})
        })

        if(!response.ok) {
            throw new Error(`Failed to fetch check user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Check register user error", error.message);
        throw error;
    }
}

export async function signUp(newUser) {
    try {
        const response = await fetch(`${baseURL}/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })

        if(!response.ok) {
            throw new Error(`Failed to create new user: ${response.statusText}`);
        }

        const data = await response.json();
        storage.setUser(newUser.email);
        return data;
    }catch (error) {
        console.log("Create new user error", error.message);
        throw error;
    }
}

export async function verifyOtp(otpObj) {
    try {
        const response = await fetch(`${baseURL}/api/otp_verification`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(otpObj)
        })

        if(!response.ok) {
            throw new Error(`Failed to verify new user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Verify OTP error", error.message);
        throw error;
    }
}

export async function signIn(userCredentials) {
    try {
        const response = await fetch(`${baseURL}/api/signin`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userCredentials)
        })

        if(!response.ok) {
            throw new Error(`Failed to login user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Create new user error", error.message);
        throw error;
    }
}

export async function signOut(userCredentials) {

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    try {
        const response = await fetch(`${baseURL}/api/signout`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(userCredentials)
        })

        if(!response.ok) {
            throw new Error(`Failed to signout user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Signout user error", error.message);
        throw error;
    }
}