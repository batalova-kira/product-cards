1. Change {} in package.json
   "homepage": "https://{batalova-kira}.github.io/{react-vite-template}",
   "scripts": {
   "build": "vite build --base=/{react-vite-template}/"}
2. Change {} in vite.config.js
   base: "/{react-vite-template}",
3. Change basename in "BrowserRouter basename={"/react-vite-template"} "
