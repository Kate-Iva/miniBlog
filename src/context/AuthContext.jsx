import { useContext, createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    return (
         <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
        )
};

export function useAuthValue() {
    return useContext(AuthContext);
};
