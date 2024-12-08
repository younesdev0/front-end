# front-end

## Projet : Outil Simplifié d'Analyse des Paniers d'Achat

### Objectif
Créer un outil d'analyse pour aider un administrateur de site e-commerce à obtenir des informations simples sur les produits les plus vendus, la répartition des ventes par catégorie, et les tendances de ventes.

Ce modèle devrait vous aider à démarrer le développement avec Vue 3 dans Vite.

## Configuration recommandée de l'IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et désactiver Vetur).

## Support de type pour les imports `.vue` en TS

TypeScript ne peut pas gérer les informations de type pour les imports `.vue` par défaut, nous remplaçons donc l'outil `tsc` par `vue-tsc` pour la vérification des types. Dans les éditeurs, nous avons besoin de [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) pour rendre le service de langage TypeScript conscient des types `.vue`.

## Personnaliser la configuration

Voir [Référence de configuration Vite](https://vite.dev/config/).

## Configuration du projet

### Installation des dépendances

```sh
npm install
```

### Compilation et rechargement à chaud pour le développement

```sh
npm run dev
```

### Vérification des types, compilation et minification pour la production

```sh
npm run build
```

### Lint avec [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Lancer l'application

Pour lancer l'application en mode développement, utilisez la commande suivante :

```sh
npm run dev
```

Cela démarrera un serveur de développement local et vous pourrez accéder à l'application via `http://localhost:3000` (ou un autre port spécifié dans la configuration).

## Aperçu des fonctionnalités disponibles

- **Hot Module Replacement (HMR)** : Rechargement à chaud des modules pour une expérience de développement fluide.
- **Support TypeScript** : Vérification des types et complétion automatique grâce à TypeScript.
- **Linting** : Analyse statique du code avec ESLint pour maintenir une qualité de code élevée.
- **Compilation et minification** : Préparation du code pour la production avec des optimisations de performance.
- **Support Vue 3** : Utilisation des dernières fonctionnalités de Vue.js pour construire des interfaces utilisateur réactives.

Pour plus de détails sur la configuration et les fonctionnalités, consultez la documentation officielle de [Vite](https://vite.dev/) et [Vue 3](https://v3.vuejs.org/).