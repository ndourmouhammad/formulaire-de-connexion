document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Réinitialiser les messages d'erreur
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let isValid = true;

    // Validation côté client
    if (username === "") {
        document.getElementById("usernameError").textContent = "Le nom d'utilisateur est obligatoire.";
        document.getElementById("usernameError").style.display = "block";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Le mot de passe est obligatoire.";
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Envoi des données au serveur via Ajax
        $.ajax({
            url: "login.php",
            method: "POST",
            data: { username: username, password: password },
            success: function(response) {

                if (response === "Connexion réussie") {
                    alert("Connexion réussie !");

                } else {

                    let errorMessages = JSON.parse(response);
                    if (errorMessages.username) {
                        document.getElementById("usernameError").textContent = errorMessages.username;
                        document.getElementById("usernameError").style.display = "block";
                    }
                    if (errorMessages.password) {
                        document.getElementById("passwordError").textContent = errorMessages.password;
                        document.getElementById("passwordError").style.display = "block";
                    }
                }
            }
        });
    }
});