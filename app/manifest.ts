import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karthik Talam — Lead Frontend Engineer',
    short_name: 'Karthik Talam',
    description: '8+ years building high-performance web platforms. Expert in Next.js, React, TypeScript, and AI-augmented engineering workflows.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
