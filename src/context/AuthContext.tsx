import React from 'react'

export interface AuthContextData {

    signInWithGoogle: () => Promise<void>;

}

export const AuthContext = React.createContext({} as any)