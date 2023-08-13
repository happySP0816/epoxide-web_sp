/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: '/R2AT',
        destination: 'https://old.epoxide.se/R2AT',
        permanent: true,
      },
      {
        source: '/stats',
        destination: 'https://old.epoxide.se/stats',
        permanent: true,
      },
      {
        source: '/replay',
        destination: 'https://old.epoxide.se/replay',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
