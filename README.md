# Music Loader Animation

## Description

Ce projet est une page web interactive qui permet de jouer de la musique tout en affichant une animation de chargement. L'interface inclut un bouton pour démarrer la musique, une liste de musiques parmi lesquelles choisir, ainsi qu'une animation visuelle synchronisée avec la musique.

## Fonctionnalités

- **Sélecteur de musique** : Choisissez parmi une liste de chansons et lancez leur lecture avec un simple clic.
- **Animation visuelle dynamique** : Une série de barres (sliders) réagit en temps réel à la fréquence audio de la musique en cours de lecture.
- **Interface utilisateur moderne** : Conception futuriste avec un effet de brouillard en arrière-plan et un lecteur audio personnalisable.
- **Compatibilité cross-browser** : Fonctionne dans la majorité des navigateurs modernes.

## Technologies utilisées

- **HTML5** : Structure de la page web.
- **CSS3** : Design, animations, et styles personnalisés.
- **JavaScript** : Gestion des événements, contrôle de la musique, et synchronisation des animations.
- **Web Audio API** : Analyseur audio pour détecter les fréquences et animer les sliders en fonction du son.
  
## Structure du projet

Le projet suit une organisation simple :

```bash
.
├── index.html          # Fichier principal HTML
├── styles.css          # Feuille de styles pour le design
├── script.js           # Logique JavaScript pour l'interactivité
├── musics/             # Dossier contenant les fichiers musicaux
├── img/                # Dossier contenant les images (background et brouillard)
└── README.md           # Documentation du projet
```
## Installation

1. Clonez ou téléchargez ce projet dans votre environnement local.
2. Placez vos fichiers audio dans le dossier `musics/`.
3. Ouvrez `index.html` dans votre navigateur préféré.

## Utilisation

1. Cliquez sur le bouton **Démarrer la musique** pour jouer la musique par défaut.
2. Sélectionnez une chanson dans la liste pour changer la musique en cours.
3. L'animation réagira automatiquement aux fréquences audio en affichant des barres de couleur qui montent et descendent.

## Personnalisation

- **Musique** : Ajoutez vos propres fichiers musicaux dans le dossier `musics/` et mettez à jour la liste des musiques dans `index.html`.
- **Animation** : Modifiez les styles dans `styles.css` pour personnaliser l'apparence des sliders ou ajuster les effets du brouillard en arrière-plan.

## Crédits

Développé par Pedro Costa en 2024.

## Licence

Ce projet est sous licence libre. Vous êtes libre de le modifier et de l'utiliser comme bon vous semble.
