'use client';

import { useEffect } from 'react';

export default function RegisterServiceWorkers() {
  useEffect(() => {
    console.log('THIS IS NAVIGATOR', navigator)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return null; // No UI needed
}