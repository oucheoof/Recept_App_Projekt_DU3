<!-- 
login.php är för att:
    logga in användare genom metoden 'POST' 
-->

<?php

require_once('functions.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];
if($requestMethod !== 'POST'){
    $error = ["Error" => "Invalid request method"];
    sendJSON($error, 405);
}

$contentType = $_SERVER["CONTENT_TYPE"];
if ($contentType != "application/json") {
    $error = ["Error" => "Invalid Content-Type, only JSON is allowed."];
    sendJSON($error, 400);
}

//hämtar data
$requestData = getRequestData();
$usersDB = 'database/users.json';

$usersJSON = file_get_contents($usersDB);
$users = json_decode($usersJSON, true);

if ($requestMethod == 'POST'){

    $requiredKeys = ['username', 'password'];
    
    if(requestContainsAllKeys($requiredKeys) == false) {
        $error = ["Error" => "Bad request: Missing key(s)."];
        sendJSON($error, 400);
    }

    $username = $requestData["username"];
    $password = $requestData["password"];
    $userExists = false;

    //loop som kollar om användarnamnet matchar en användare som finns
    foreach($users as $user){
        if ( $user['username'] === $username) {
            $userExists = true;
            break; 
        }
    }

    if (!$userExists){
        $error = ["Error" => "User not found."];
        sendJSON($error, 404);
    }

    if ($userExists && $user['password'] != $password){
        $error = ["Error" => "Incorrect password."];
        sendJSON($error, 400);
    }

    $token = ["token" => sha1("$username$password")];
    sendJSON($token, 200);

}

?>