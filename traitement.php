<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'e_syndiliya';
$username = 'root';
$password = '';

// Vérification de la connexion

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  } catch (PDOException $pe) {
    die("Could not connect to the database");
  }
  
// Récupération des données du formulaire
if (
    isset($_POST['nom']) &&
    isset($_POST['prenom']) &&
    isset($_POST['email']) &&
    isset($_POST['telephone']) &&
    isset($_POST['message']) 
  ) {$insertion = $pdo->prepare("INSERT INTO message(nom, prenom, email, telephone,  message)VALUE(?, ?, ?, ?, ?)");
// Insertion des données dans la base de données
    $insertion->execute([
      $_POST['nom'],
      $_POST['prenom'],
      $_POST['email'],
      $_POST['telephone'],
      $_POST['message'],
    ]);
        // Envoi d'un email de notification
$to = "votre@email.com";
$subject = "Nouveau message reçu depuis le formulaire de contact";
$message = "Nom: ".$_POST['nom']."\n".
           "Prénom: ".$_POST['prenom']."\n".
           "Email: ".$_POST['email']."\n".
           "Téléphone: ".$_POST['telephone']."\n".
           "Message: ".$_POST['message']."\n";
$headers = "From: noreply@votre-site.com";
mail($to, $subject, $message, $headers); 

    //Redirection vers la page de confirmation
    header("Location: confirmation.php");
    exit();

    // Si le formulaire n'a pas été soumis, rediriger vers la page principale
//header("Location: index.php");
//exit();

  }


?>
