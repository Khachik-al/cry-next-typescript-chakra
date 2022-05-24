import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'


export const nftList = async ({ offset, limit, sort, order }: { offset: number, limit: number, sort: string, order: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft?offset=${offset}&limit=${limit}&sort=${sort}&order=${order}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft?limit=2000`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftMarketplace = async ({ slug, limit, offset }: { slug: string, limit: number, offset: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token?offset=${offset}&limit=${limit}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null

}

export const coinItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token?limit=250`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinMarkets = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange?offset=${offset}&limit=${limit}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null

}

export const exchangeItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeMarket = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const signUp = ({ username, email, password }: { username: string, email: string, password: string }) => {
  return Auth.signUp({
    username: username,
    password,
    attributes: { email },
  })
}

export const verifyCode = ({ type, email, code, newPassword }: { type: string, email: string, code: string, newPassword?: string }) => {
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
  return Auth.currentUserInfo()
} 