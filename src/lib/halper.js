export const baseURL = import.meta.env.VITE_BASE_URL;

export function currencyFormator(value) {
    const result = new Intl.NumberFormat("en-BD", 
        {style: "currency", currency: "BDT"}
    ).format(value)

    return result;
}
