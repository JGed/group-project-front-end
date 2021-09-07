import { createContext, useContext } from 'react';

const SessionContext = createContext();

const SessionProvider = ({ sessionToken, setSessionToken, children }) => {
    return <SessionContext.Provider value={{sessionToken: sessionToken, setSessionToken: setSessionToken}}>{children}</SessionContext.Provider>
}

const useSession = () => {
    const context = useContext(SessionContext);
    if(context === undefined) {
        throw new Error('useSession must be wrapped by SessionProvider')
    }
    return {
        sessionToken: context.sessionToken,
        setSessionToken: context.setSessionToken
    }
}

export { useSession, SessionProvider };