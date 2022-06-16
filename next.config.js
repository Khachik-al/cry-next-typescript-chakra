const appEnv = require('./src/env-loader')
const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
const nextConfig = withPreact({
  reactStrictMode: true,
})

module.exports = nextConfig

module.exports = {
  images: {
    loader: 'custom'
  },
  env: appEnv,
  trailingSlash: true
}


