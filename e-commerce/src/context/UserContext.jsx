import { createContext } from "react";

export default createContext({
    user: null,
    setUser: () => undefined,
    setToken: () => undefined,
    token: null,
    authenticated: null,
    setAuthenticated: () => undefined,
    handleLogout: () => undefined
})