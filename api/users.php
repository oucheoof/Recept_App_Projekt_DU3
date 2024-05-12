<!-- 
 users.php är för att:
    registrera nya användare genom metoden 'POST'
    radera användare genom metoden 'DELETE'
-->

<?php

require_once('functions.php'); //för att kunna få användning av funktioner i functions.php

$requestMethod = $_SERVER['REQUEST_METHOD'];
if($requestMethod !== 'POST' && $requestMethod !== 'DELETE'){
    $error = ["Error" => "Invalid request method"];
    sendJSON($error, 405);
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

    //kollar om det redan finns användare (med samma namn)
    $username = $requestData['username'];
    $usernames = array_column($users, 'username');
    if(in_array($username, $usernames)){
        $error = ["Error" => "Bad request: This user already exists."];
        sendJSON($error, 400);
    }
    //kollar om det finns ett snabel a i emailen
    $email = $requestData['email'];
    if(strpos($email, '@') === false){
        $error = ["Error" => "Bad request: Not an email adress, missing '@'."];
        sendJSON($error, 400);
    }

    //kollar om det upprepade lösenordet är samma
    if($requestData['password'] !== $requestData['rptpassword']){
        $error = ["Error" => "Passwords do not match"];
        sendJSON($error, 400);
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

    if(!isset($deletedUser)){
        $error = ["Error" => "Bad request: Invalid token."];
        sendJSON($error, 400);
    }

    $index = array_search($deletedUser,$users);
    array_splice($users, $index, 1);
    // unset($newUser["password"],$newUser["rptpassword"]);
    $usersJSON = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents($usersDB, $usersJSON);
    sendJSON($deletedUser, 200);
    
}

?>