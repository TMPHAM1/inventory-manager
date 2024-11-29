

const CACHE_NAME = "version-1"
const urlsToCache = ["index.html"]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=> {
            console.log("OPENED CACHE", cache);
        }
    ))
})