/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth/login',
        destination: '/login',
      },
      {
        source: '/auth/register',
        destination: '/register',
      },
    ]
  },
}