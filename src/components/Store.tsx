import { CognitoUser } from '@aws-amplify/auth'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { getUser, unsubscribe } from '../services/auth-services'

interface Props {
  children: ReactNode;
}
export const Context = createContext({ username: '' })

const Store: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any | null>()

  useEffect(() => {
    unsubscribe({ setUser })
    getUser().then((currentUser: CognitoUser) => setUser(currentUser))
    return unsubscribe({ setUser })
  }, [])

  return (
		<Context.Provider value={user}>
			{children}
		</Context.Provider>
  )
}

export default Store
