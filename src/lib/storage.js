const USER_EMAIL = "user_email";
const USER_KEY = "app_user";
const TOKEN_KEY = "app_token";

export const storage = {
    setEmail(email) {
        if(email) localStorage.setItem(USER_EMAIL, JSON.stringify(email));
    },

    getEmail() {
        const email = localStorage.getItem(USER_EMAIL);
        return email ? JSON.parse(email) : null;
    },

    clearEmail() {
        localStorage.removeItem(USER_EMAIL);
    },

    setUser(user) {
        if(user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    getUser() {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    },

    clearUser() {
        localStorage.removeItem(USER_KEY);
    },

    setToken(token) {
        if(token) localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    },

    getToken() {
        return JSON.parse(localStorage.getItem(TOKEN_KEY))
    },

    clearToken() {
        return localStorage.removeItem(TOKEN_KEY);
    },
    
    clearAll() {
        localStorage.clear();
    }
};