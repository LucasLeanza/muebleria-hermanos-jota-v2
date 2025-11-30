import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        () => localStorage.getItem("token") ?? null
    );
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));
    const [loading, setLoading] = useState(false);

    const login = (newToken, newUser) => {
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        setIsAuth(false);
    };

    const fetchWithAuth = async (url, opts = {}) => {
        const headers = opts.headers ? { ...opts.headers } : {};

        if (token) headers.authorization = "Bearer " + token;

        const res = await fetch(url, { ...opts, headers });

        if (res.status === 401) {
            logout();
        }

        return res;
    };

    const value = {
        token,
        user,
        isAuth,
        loading,
        setLoading,
        login,
        logout,
        fetchWithAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};