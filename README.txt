ANDROID-ONLY PWA -> WEBAPK ROADMAP

1. Unzip this folder on your Android phone.
2. Upload the files to an HTTPS website/hosting service.
3. Keep the folder structure exactly as provided.
4. Verify these URLs work:
   /index.html
   /manifest.webmanifest
   /service-worker.js
   /icons/icon-192.png
   /icons/icon-512.png
5. Open the HTTPS website in Chrome on Android.
6. If Chrome offers "Install app" / "Add to Home screen", install it.
7. Chrome handles WebAPK generation automatically.

IMPORTANT:
- Do not rename manifest.webmanifest to .json.
- Do not rename service-worker.js.
- Service workers require HTTPS (localhost is also allowed for development).
- This package contains a basic PWA shell. Replace index.html/style.css/app.js
  with your actual website UI when ready.
- The generated WebAPK is created by Chrome; you do not manually sign it.

CONFIGURATION MATCHED TO THE INSPECTED WEBAPK:
Name: Instagram
Short name: Instagram
Display: standalone
Orientation: portrait
Theme color: #000000
Background color: #000000
Scope: /
Start URL: /
