import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GearTrace - Inventory Manager',
    short_name: 'GearTrace',
    description: 'Inventory management application',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008000',
    orientation: 'portrait',
    id: 'GearTraceMain',
    icons: [
      {
        src: '/icons/gear-icon.webp',
        sizes: '144x144',
        type: 'image/webp',
      },
    ],
  }
}
