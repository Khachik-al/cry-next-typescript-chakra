import { CognitoHostedUIIdentityProvider, CognitoUser } from '@aws-amplify/auth'
import { Auth, Hub } from 'aws-amplify'

export const signUp = ({ email, password }: { email: string, password: string }) => {
  return Auth.signUp({
    username: email,
    password,
    attributes: { email },
  })
}

export const verifyCode = ({ type, email, code, newPassword }: { type?: string, email: string, code: string, newPassword?: string }) => {
  if (type === 'ForgotPasswordSubmit' && newPassword) {
    return Auth.forgotPasswordSubmit(email, code, newPassword)
  } else {
    return Auth.confirmSignUp(email, code)
  }
}

export const resendCode = ({ email }: { email: string }) => {
  return Auth.resendSignUp(email)
}

export const signIn = ({ email, password }: { email: string, password: string }) => {
  return Auth.signIn(email, password)
}

export const federatedSignIn = () => {
  Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
}

export const logOut = async () => {
  return Auth.signOut()
}

export const forgotPassword = (email: any) => {
  Auth.forgotPassword(email)
}

export const getUser = () => {
  return Auth.currentAuthenticatedUser()
}

export const unsubscribe = ({ setUser }: { setUser: (value: CognitoUser | null) => void }) => {
  Hub.listen('auth', ({ payload: { event, data } }) => {
    switch (event) {
      case 'signIn':
        setUser(data)
        break
      case 'signOut':
        setUser(null)
        break
    }
  })
}