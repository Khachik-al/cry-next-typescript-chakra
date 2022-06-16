const awsExports = {
  Auth: {
    identityPoolId: 'us-east-1:031615434799:userpool/us-east-1_unI1t8jlb',
    region: 'us-east-1',
    userPoolId: 'us-east-1_unI1t8jlb',
    userPoolWebClientId: '6hgf7g57s426hjhdcbqcecr71t',
  },
  oauth: {
    domain: 'dev-login-cryptogic.auth.us-east-1.amazoncognito.com',
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: process.env.REDIRECT,
    redirectSignOut: process.env.REDIRECT,
    responseType: 'code',
  },
  ssr: true, 
}

export default awsExports