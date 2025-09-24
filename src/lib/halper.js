import { storage } from "./storage";

export const baseURL = import.meta.env.VITE_BASE_URL;

// export const userId = "68ce5a453366b8b9a84b2990"
// export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2U1YTQ1MzM2NmI4YjlhODRiMjk5MCIsImlhdCI6MTc1ODM1NDU1MX0.zzeyfNx_ikcYyHINkAxReM82xjH3VOPIBwFHXK7IcVg"

export const user = storage.getUser();
export const token = storage.getToken()

export function currencyFormator(value) {
    const result = new Intl.NumberFormat("en-BD", 
        {style: "currency", currency: "BDT"}
    ).format(value)

    return result;
}
