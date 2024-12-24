module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}", // Recherche les classes utilisées dans ces fichiers
    "./index.html" // Inclus également le fichier HTML principal
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Chemin relatif à partir de la racine du projet
        'hero': "url('./src/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
