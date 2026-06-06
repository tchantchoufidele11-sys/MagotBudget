<p align="center">
  <img src="icon.png" alt="MagotBudget" width="96" height="96"/>
</p>

<h1 align="center">MagotBudget</h1>

<p align="center"><strong>Votre budget familial, privé et hors-ligne — dans une seule page web.</strong></p>

MagotBudget est une application de gestion de budget *privacy-first* : vos données restent
**chiffrées sur votre appareil**, l’app fonctionne **hors-ligne** (PWA installable), et lit
automatiquement vos **tickets de caisse** et **relevés bancaires**.

> Version actuelle : **v216** · Application web autonome (un seul fichier `index.html`)

-----

## ✨ Fonctionnalités

- **Suivi dépenses / revenus / épargne** par catégories et sous-catégories.
- **Lecture automatique de relevés bancaires** (PDF, CSV, OFX) — détection des colonnes
  Débit/Crédit, des montants et des dates, multi-banques (Société Générale, Crédit Agricole…).
- **Scan de tickets de caisse** (photo ou PDF) avec OCR : magasin, date et **montant payé**
  (réductions déduites) détectés automatiquement, et répartition possible en plusieurs catégories.
- **Tableau de bord** : solde disponible, évolution, santé financière, prévisions du mois.
- **Synchronisation famille** en temps réel (optionnelle).
- **5 langues** : Français, English, Español, Italiano, Deutsch.
- **100 % hors-ligne** une fois installée, avec sauvegarde / export de vos données.

-----

## 📲 Installation (iPhone, Android, ordinateur)

MagotBudget s’installe comme une application, sans passer par un store :

**iPhone / iPad (Safari)**

1. Ouvrir le lien de l’application dans **Safari**.
1. Toucher le bouton **Partager** → **« Sur l’écran d’accueil »**.
1. L’icône MagotBudget apparaît comme une vraie app.

**Android (Chrome)**

1. Ouvrir le lien dans **Chrome**.
1. Menu **⋮** → **« Installer l’application »** (ou « Ajouter à l’écran d’accueil »).

**Ordinateur (Chrome / Edge)**

- Cliquer sur l’icône d’installation dans la barre d’adresse.

-----

## 🔄 Mises à jour

L’application se met à jour **toute seule** : à chaque ouverture connectée, elle récupère la
dernière version (stratégie *network-first* pour le HTML). Le numéro de version est visible
dans la console et dans les Réglages.

**Si l’écran reste blanc après une mise à jour** (cache figé ou fichier incomplet) :

1. Un écran de secours propose **« Recharger (vider le cache) »** — touchez-le.
1. Sinon : fermez complètement l’app (balayer pour la quitter) puis rouvrez-la.
1. En dernier recours : ouvrez le lien dans le navigateur et **rechargez la page** deux fois.

-----

## 🚀 Déploiement (pour le mainteneur)

L’app est hébergée sur **GitHub Pages**. À chaque nouvelle version :

1. **Téléverser les DEUX fichiers à la racine du dépôt** :
- `index.html` (l’application)
- `firebase-messaging-sw.js` (notifications push — sinon elles ne fonctionnent pas)
1. Vérifier que `index.html` est **complet** (≈ 2,6 Mo) — un fichier tronqué donne un écran blanc.
1. Attendre 1–2 min que GitHub Pages publie, puis recharger en vidant le cache.

> Notifications push sur écran verrouillé : nécessitent le plan **Firebase Blaze** et le
> déploiement de la Cloud Function **depuis un ordinateur** (Firebase CLI).

-----

## 🔒 Confidentialité

- Vos opérations sont **chiffrées (AES-256-GCM)** et stockées **localement** sur votre appareil.
- Aucune donnée n’est envoyée à un serveur tiers à votre insu.
- Le fichier de l’app est **autonome et lisible** : aucun traçage caché.

### Services externes utilisés (et pourquoi)

|Service                   |Usage                                  |Optionnel|
|--------------------------|---------------------------------------|---------|
|Google Vision / Mistral AI|OCR des tickets (vos propres clés)     |✅        |
|Firebase (Firestore)      |Synchronisation famille / notifications|✅        |
|jsDelivr (CDN)            |Bibliothèques PDF.js, Chart.js…        |—        |
|Frankfurter / ER-API      |Taux de change                         |✅        |

-----

## 🛠️ Détails techniques

- **Architecture** : application monopage autonome (HTML/CSS/JS dans un seul fichier).
- **Hors-ligne** : Service Worker (cache versionné) + IndexedDB.
- **Chiffrement** : AES-256-GCM, dérivation de clé PBKDF2.
- **Graphiques** : Chart.js · **PDF** : PDF.js · **OCR** : Google Vision / Mistral / Tesseract.

-----

## 📜 Licence

© 2026 Loïc — Tous droits réservés.
Application personnelle ; reproduction et redistribution non autorisées sans accord.