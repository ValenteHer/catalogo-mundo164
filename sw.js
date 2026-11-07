// Service worker mínimo del catálogo Mundo 1/64.
// Solo sirve para que el navegador permita instalar el catálogo como app.
// No guarda nada en caché: siempre se carga la versión más reciente del catálogo y los datos en vivo.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => { /* sin interceptar: el navegador resuelve cada petición normalmente */ });
