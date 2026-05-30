/* firebase-messaging-sw.js — Service Worker pour les notifications push (FCM)
 * À placer À LA RACINE du site, à côté de index.html
 * (https://tchantchoufidele11-sys.github.io/MagotBudget/firebase-messaging-sw.js)
 *
 * Ce fichier permet de recevoir les notifications push même quand
 * l'application est fermée ou en arrière-plan (selon le support de la plateforme).
 */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBN2lV_6K5Sn9RDAjVx4oIo4r2wG0bOvaA',
  authDomain: 'magotbudget-1fe21.firebaseapp.com',
  projectId: 'magotbudget-1fe21',
  appId: '1:180201319156:web:02fb2f04f0ac74b1a84ca1'
});

const messaging = firebase.messaging();

// Notification reçue quand l'app est en arrière-plan / fermée
messaging.onBackgroundMessage(function(payload) {
  const n = (payload && payload.notification) || {};
  const title = n.title || 'MagotBudget';
  const options = {
    body: n.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    data: (payload && payload.data) || {}
  };
  self.registration.showNotification(title, options);
});

// Au clic sur la notification : ouvrir / focaliser l'app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
