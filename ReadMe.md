# Mini-Projet Resotic
Réalisation d'un projet pour l'entreprise Resotic avec une limite de temps d'environ 2 jours.

## Objectifs
- Création d'un outil de visualisation de l'organigramme d'une entreprise
- Formulaire d'ajout d'un nouvel employé dans l'organigramme

## Outils
- Framework Ionic 4 (Beta)
- API jsonplaceholder
- Logiciel Adobe XD

## Workflow
- Vendredi 23/11/2018
1. Installation des outils + initialisation Git : 30 minutes
2. Prototypage avec Adobe XD : 1h environ
3. Découverte du framework : 2h30 => Tests sur la page Home et Contact
- Samedi 24/11/2018
1. Mise en place de l'API jsonplaceholder 10 minutes
2. Style de la page Contact : 30 minutes
3. Affichage des employés + styles : 2h
- Dimanche 25/11/2018
1. Ecriture du rapport/readme 2h
2. Style de la page Details 1h (TODO)
3. Déploiement du site (TODO)
- Recherches n'ayant pas abouti : environ 4h (majoritairement samedi)
- Total : environ 12h

## Mise en place du projet
- Installation de Ionic
npm install -g ionic
- Créer le projet
ionic start project tabs
- Essayer Ionic 4
YES
- Installer Ionic Pro SDK
YES
- Lier un projet existant
- Choisir Mini-Projet Resotic

## Ce que j'ai fait
- Création de l'application
1. Création d'un prototype Adobe XD
Permet d'avoir une première idée sur le design du site et de ne pas coder à l'aveugle.
Le fichier est disponible sur git : prototype.xd (Adobe XD est gratuit)
2. Mise en place d'un dépot git
3. Choix de la disposition tabs (bandeau de navigation placé en bas de page) 
Bien adapté aux mobiles => un peu dommage puisque je n'ai pas mis en place le design mobile
4. Création d'une navbar + Home page + Contact page
Bien que basé sur le fonctionnement d'Angular, je ne connaissais pas le framework Ionic, j'ai donc tenté de découvrir ses fonctionnalités en commençant le développement de la page d'accueil ainsi que la page de contact. Ce framework, à l'image d'Angular, est assez puissant et permet de faciliter grandement le développement en ajoutant plusieurs fonctionnalités à Angular. Néanmoins, comme vous le remarquerez (ou l'avez remarqué), le design n'est pas réellement mon point fort malgré l'intérêt que je porte pour cette partie très spécifique du développement web.
5. Récupération des employés
Création d'un service http effectuant une requête vers le site jsonplaceholder puis affichage des données dans la page About.
6. Création de la page Details
Utilisation du service http pour effectuer une requête pour récupérer un employé grâce à son id.
Affichage du résultat dans une nouvelle page.
- Déploiement du site
Création d'un compte gratuit et transfert des fichiers.

## Si j'avais eu plus de temps ...
- Ajout d'un formulaire d'ajout et d'édition des informations d'un employé
1. Mise en place d'une requête POST en frontend contenant les informations relatives au nouvel employé
2. Gestion de la requête POST en backend avec écriture dans un fichier JSON / la base de données des employés
3. Mise en place d'une requête UPDATE en frontend contenant les informations à modifier
4. Gestion de la requête UPDATE en backend avec modification de l'employé (id de l'employé connu) dans le fichier JSON / Table de la base de donnée correspondante
5. Affichage via un toast ou une card du succès/échec de la requête
- Style de l'organigramme
1. Mettre en place le prototype Adobe XD
- Mise en place du design responsive
1. J'aurai du le faire dès le départ mais ne connaissant pas la techno je voulais d'abord en connaître les spécifités (différents components, ...)
2. Essayer d'adapter le prototype Adobe XD en Sass
- Mettre en place des tests
- Mettre en place un système d'authentification pour la modification du site
1. Ajouter une table dans la base de données pour la gestion des comptes
