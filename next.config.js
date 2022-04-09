/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
  env: {
    apiKey: "AIzaSyCgeXImMnFbA5qdDGmylKVduxZZSg8imlU",
    authDomain: "auth-ix.firebaseapp.com",
    projectId: "auth-ix",
    storageBucket: "auth-ix.appspot.com",
    messagingSenderId: "984262885855",
    appId: "1:984262885855:web:2444844f011e227e05446a",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};
