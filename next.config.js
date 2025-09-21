/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // désactive l'optimisation d'image côté serveur
  },
}

module.exports = nextConfig
