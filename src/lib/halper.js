export const baseURL = "https://ebook.boiaro.com";

export function currencyFormator(value) {
    const result = new Intl.NumberFormat("en-BD", 
        {style: "currency", currency: "BDT"}
    ).format(value)

    return result;
}

