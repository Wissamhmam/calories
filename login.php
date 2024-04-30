<?php
session_start();

// Define your actual username and password
$validUsername = "admin";
$validPassword = "psw";

// Retrieve username and password from form submission
$inputUsername = $_POST["username"];
$inputPassword = $_POST["password"];

echo "Input Username: " . $inputUsername . "<br>";
echo "Input Password: " . $inputPassword . "<br>";

// Check if username and password are correct
if ($inputUsername === $validUsername && $inputPassword === $validPassword) {
    // Authentication successful, set session variables
    $_SESSION["loggedin"] = true;
    $_SESSION["username"] = $inputUsername;
    // Redirect to welcome page or any desired location
    header("Location: index.html");
} else {
    // Authentication failed, redirect back to login page with error message
    header("Location: index.html");
}
?>
