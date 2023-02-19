# Web Application

## Contenu du projet
### Generalités
Voici le lien du site produit par ce projet : [Webappfeli](https://webappfeli.netlify.app/)

Ce projet consiste à appliquer un front-end sur un [back-end](https://github.com/RochMoreau/secure-web-dev-backend) établi précédemment.
Ce site a :
- Une page d'accueil
  - Lorsque l'on clique sur la page log out, on est déconnecté et l'on est redirigé vers la page d'accueil
- Une page de location
  - Si l'on clique sur locations sans s'être connecté auparavant, on est redirigé vers la page de login
  - Dans la page location; il est possible d'ouvrir une page de creation de location si l'utilisateur est un administrateur
  - Malheureusement, je n'ai pas fait la liste des localisations de manière paginée comme demandé
- Une page register
  - La page register permet de se créer un compte si on n'en a pas

Pour voir le front sans avoir déployé, il faut se déplacer dans le dossier svelte (cd svelte au terminal), puis lancer la commande : "npm run dev"
Pour faire compiler la partie back sans avoir déployé, il faut juste lancer le projet (start index.js en fait), et aller sur un visualisateur comme insomnia ou postman.

### User Stories
Voici les objectifs initiaux à atteindre : 
- US1: As a random visitor, I want to be able to register an account or log-in, so I can
access all features => OK
- US2: As a random visitor, I want to be redirected to the login/register page when I click on
“location" tab, so that I know I must log-in to see its content => OK (vers login)
- US3: As a logged-in user, I want to see locations and be able to click on one location to
open a modal containing details, so that the website is useful => OK, mais il n'y a pas de paginations pour l'instant
- US4: As an “admin" user, I want to see a “Add Location” button in the location page, so
that I can create a new location => OK
- US5: As an “admin" user, I want to see a button to edit locations in the array of locations,
so that I can edit existing locations => OK
- US6: As an “admin" user, I want to see a button to delete locations in the array of
  locations so that I can delete existing locations => OK

## Le code
### Démarche
J'ai eu quelques difficultés à saisir comment le back et le front allaient être connectés et communiquer ensemble. Je me suis beaucoup appuyé sur un template de SvelteKit pour saisir le fonctionnement.

### Composition du projet
- Les documents permettant le lancement de l'application, ou bien le remplissage de la base de données sont dans le dossier principal.
- Dans le dossier src, on peut trouver le back-end initial, construit avec javascript
- Dans le dossier svelte, on peut trouver le front-end, construit avec svelte kit
  - Le dossier .netlify permet d'effectuer le déploiement du front
  - Le dossier public est un dossier demander lors du déploiement, qui sert d'output
  - Le dossier src contient les routes et les pages sveltes à proprement parler

### Installations
J'ai installé plusieurs éléments suplémentaires. Ils ne sont pas tous utiles, car parfois, je tatonnais juste, ou bien cherchais une solution en testant différentes options. 

J'espère que je n'en ai oublié aucun :
- npm create svelte@latest svelte (pour créer le projet svelte)
- npm install axios
- npm install vite
- npm install --save-dev nodemon
- npm install rollup
- npm install npx
- npm install cors
- npm install webpack
- npm install svelte
- npm install -g svelte-kit
- npm install -g fly-cli
- npm install flyctl
- npm install passport-jwt    
- npm install yarn

# Le déploiement
Pour le déploiement, j'ai utilisé Render pour le back et Netlify pour le front. Pour lier les deux, j'ai mis le lien généré par le déploiement du back-end à la place de l'URL localhost. Ainsi, en déclenchant le front-end, je déclenche le back-end en réalité. Pour que les mises à jours s'effectuent seules, je n'ai rien eu à faire, cela fonctionnait automatiquement.