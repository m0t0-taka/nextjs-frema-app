/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return compilerConfig
  })(),
}

module.exports = nextConfig
