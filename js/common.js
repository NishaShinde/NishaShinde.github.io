//Register the service worker as this is common js file for both htmls
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log("Service worker registering....");
      navigator.serviceWorker
        .register('sw/sw_restaurant_cached_site.js')
        .then(reg => console.log('Service Worker: Registered (Sites)'))
        .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
  }