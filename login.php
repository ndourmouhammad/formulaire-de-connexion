<?php
// Charger les utilisateurs à partir du fichier JSON
$usersData = file_get_contents("users.json");
$users = json_decode($usersData, true)["users"];

// Récupérer les données envoyées via POST
$username = htmlspecialchars(trim($_POST["username"]));
$password = htmlspecialchars(trim($_POST["password"]));

// Initialiser un tableau d'erreurs
$errors = array();

// Validation des champs côté serveur
if (empty($username)) {
    $errors['username'] = "Le nom d'utilisateur est requis.";
}

if (empty($password)) {
    $errors['password'] = "Le mot de passe est requis.";
}

// Si les identifiants sont valides, vérifier l'utilisateur dans le fichier JSON
if (empty($errors)) {
    $userFound = false;
    foreach ($users as $user) {
        if ($user["username"] == $username && $user["password"] == $password) {
            $userFound = true;
            break;
        }
    }

    if (!$userFound) {
        $errors['username'] = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Retourner les erreurs ou un message de succès
if (empty($errors)) {
    echo "Connexion réussie";
} else {
    // Renvoi des erreurs sous forme de JSON
    echo json_encode($errors);
}
?>
