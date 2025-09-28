const baseURL = import.meta.env.VITE_BASE_URL;

//Existing user checking
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
            throw new Error(`Failed to fetch existing user checking: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error) {
        console.log("Existing user checking", error.message);
        throw error;
    }
}

//User sign up
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
        return data;
    }catch (error) {
        console.log("Create new user error", error.message);
        throw error;
    }
}

//OTP verification 
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

//Sign in user
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
            throw new Error(`Failed to fetch sign in user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Sign in user error", error.message);
        throw error;
    }
}

//Sign out user
export async function signOut(userCredentials, token) {

    //Authentication token
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
            throw new Error(`Failed to fetch signout user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.log("Sign out user error", error.message);
        throw error;
    }
}