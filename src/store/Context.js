import { createContext, useState } from "react";



export const FirebaseContext = createContext(null)

export const AuthContext = createContext(null)


export default function Context({children}){
    const [user,setUser] = useState(null)
    return(
        <AuthContext.Provider value={{user,setUser}}>
             {children}  
            {/* here calls App 
                user and setUser passed to AuthContext.Provider
            */}
        </AuthContext.Provider>
    )
}