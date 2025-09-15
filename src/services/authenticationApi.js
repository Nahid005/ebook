const baseURL = import.meta.env.VITE_BASE_URL;

//existing user checking
export async function checkRegisterUser(email) {
    try {
        const response = await fetch(`${baseURL}/api/checkregistereduser`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(email)
        })

        if(!response.ok) {
            throw new Error("Internal Server Error");
        }

        const data = response.json();
        return data;
    }catch(error) {
        console.log(error.message)
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
            throw new Error("Internal Server Error");
        }

        const data = response.json();
        return data;
    }catch (error) {
        console.log(error.message)
    }
}


