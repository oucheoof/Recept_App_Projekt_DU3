<?php

require_once('functions.php'); //för att kunna få användning av funktioner i functions.php

$requestMethod = $_SERVER['REQUEST_METHOD'];
if($requestMethod !== 'POST' && $requestMethod !== 'DELETE' && $requestMethod !== "GET"){
    $error = ["Error" => "Invalid request method"];
    sendJSON($error, 405);
}


if($requestMethod == "GET"){
    if(!isset($_GET['token'])){
        $error = ["Error" => "Token is empty"];

        sendJSON($error, 400);
    }
    
    $token = $_GET['token'];

    $filename = "./database/users.json";

    if(file_exists($filename)){ 
        $json_encoded_data = file_get_contents($filename); 
        $users = json_decode($json_encoded_data, true);
    }

    foreach($users as $user){
        $username = $user["username"];
        $password = $user["password"];

        if(sha1("$username$password") == $token){
            
            // $users[] = $sortedUsers;
            // $sortedUsers = $users; 
            sendJSON($user);

        }
    }


    $error = ["Error" => "User not found"];
    sendJSON($error, 404);
    //filegetcontents path:
    //sedan parsa från json till kod
    //loopa igenom alla användare for each
    //if sats, om sha1 == $token
    //skickar användaren som stämmer (sendJSON)
}

$contentType = $_SERVER["CONTENT_TYPE"];
if ($contentType != "application/json") {
    $error = ["Error" => "Invalid Content-Type, only JSON is allowed."];
    sendJSON($error, 400);
}
$requestData = getRequestData();
$usersDB = 'database/users.json';

$usersJSON = file_get_contents($usersDB);
$users = json_decode($usersJSON, true);

if ($requestMethod == 'POST'){ //registrera en ny användare
    $requiredKeys = ['username', 'email', 'password', 'rptpassword'];
    
    if(requestContainsAllKeys($requiredKeys) == false) {
        $error = ["Error" => "Bad request: Missing key(s)."];
        sendJSON($error, 400);
    }

    if (anyEmpty($requiredKeys)){
        $error = ["Error" => "Bad request: One or some fields are empty."];
        sendJSON($error, 400);
    }
    
    //kollar om det redan finns användare (med samma namn)
    $username = $requestData['username'];
    $usernames = array_column($users, 'username');
    if(in_array($username, $usernames)){
        $error = ["Error" => "Bad request: This user already exists."];
        sendJSON($error, 473);
    }
    //kollar om det finns ett snabel a i emailen
    $email = $requestData['email'];
    if(strpos($email, '@') === false){
        $error = ["Error" => "Bad request: Not an email adress, missing '@'."];
        sendJSON($error, 472);
    }

    //kollar om det upprepade lösenordet är samma
    if($requestData['password'] !== $requestData['rptpassword']){
        $error = ["Error" => "Bad request: Passwords do not match"];
        sendJSON($error, 471);
    }
    
    //ger användaren ett id
    $newUser = [];
    $highestID = 0;
    foreach ($users as $user) {
        if ($user["id"] > $highestID) {
            $highestID = $user["id"];
        }
    }
    $nextID = $highestID + 1;
    $newUser["id"] = $nextID;

    foreach($requiredKeys as $key){
        $newUser[$key] = $requestData[$key];
    }

    $users[] = $newUser;
    $usersJSON = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents($usersDB, $usersJSON);
    sendJSON($newUser, 201);

}

if ($requestMethod == 'DELETE'){ //radera en användare

    if(empty($requestData)){
        $error = ["Error" => "Bad request: Empty request."];
        sendJSON($error, 400);
    }

    if(isset($requestData["token"]) == false){
        $error = ["Error" => "Bad request: Missing token."];
        sendJSON($error, 400);
    }
    
    //hittar användaren i andvändar-databasen
    foreach ($users as $user) {
        if (isset($user['username'], $user['password'])) {
            $username = $user['username'];
            $password = $user['password'];

            $requestToken = $requestData['token'];
            $userToken = sha1("$username$password");

            if ($requestToken == $userToken) {
                $deletedUser = $user;
                break;
            }
        }
    }

    // om den inte hittar token
    if(!isset($deletedUser)){
        $error = ["Error" => "Bad request: Invalid token."];
        sendJSON($error, 400);
    }

    //tar bort den hittade usern
    $index = array_search($deletedUser,$users);
    array_splice($users, $index, 1);

    $usersJSON = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents($usersDB, $usersJSON);
    sendJSON($deletedUser, 200);
    
}

?>