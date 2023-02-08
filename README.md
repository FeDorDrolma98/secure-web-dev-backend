# Secure Web Development - Website v0

## 👷 Commentaires

Je n'ai malheureusement pas réussi à connecter le front au back... Après avoir cherché longtemps, j'ai fini par m'appuyer sur un template fournis par SvelteKit, mais même avec cela, le lien n'est pas opérationnel...
Je voulais garder séparé le front et le back. Le dossier svelte contient donc la partie front. Pour voir le front (incomplet donc), il faut se déplacer dans le dossier svelte (cd svelte au terminal), puis lancer la commande : "npm run dev"

Pour faire compiler comme d'habitude la partie back il faut juste lancer le projet (start index.js en fait), et aller sur un visualisateur comme insomnia ou postman. J'ai essayé d'automatiser le lancement du front dans l'index.js initial, mais sans succes. Les lignes concernant ce point sont en commentaires pour ne pas empecher l'application de démarrer.

## Commande principales

J'ai installé plusieurs éléments suplémentaires, j'espère que je n'en ai oublié aucun :
- npm create svelte@latest svelte pour créer le projet svelte
- npm install axios
- npm install vite
- npm install --save-dev nodemon