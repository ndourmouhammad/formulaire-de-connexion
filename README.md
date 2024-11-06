# Plateforme de Connexion

Un formulaire de connexion en utilisant PHP et Bootstrap. L'application permet aux utilisateurs de se connecter.

## Fonctionnalités

- Page de connexion avec validation côté client (JavaScript) et côté serveur (PHP).
- Authentification simple avec un nom d'utilisateur et un mot de passe.
- un message alert à l'utilisateur connecté.
- Utilisation de Bootstrap pour une interface propre et responsive.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé PHP et un serveur local comme [XAMPP](https://www.apachefriends.org/index.html) ou [WAMP](https://www.wampserver.com/). Vous pouvez également utiliser un serveur en ligne.

## Installation

1. Clonez ce dépôt ou téléchargez-le sur votre machine locale.
2. Placez les fichiers dans le répertoire de votre serveur local (par exemple, `htdocs` pour XAMPP).
3. Si vous utilisez un serveur local, ouvrez `localhost` dans votre navigateur pour voir l'application.


## Structure du projet

- **index.html** : Page de connexion avec formulaire pour entrer le nom d'utilisateur et le mot de passe.
- **login.php** : Validation du formulaire côté serveur.
- **users.json** : Un fichier json contenant les informations des utilisateurs.
- **validation.js** : Validation formulaire côté client.
- **style.css** : Fichier de style personnalisé.

## Utilisation

### 1. Connexion
- Entrez un nom d'utilisateur et un mot de passe dans le formulaire de connexion.
- Les informations par défaut sont :
    - **Nom d'utilisateur** : `admin`
    - **Mot de passe** : `1234`

