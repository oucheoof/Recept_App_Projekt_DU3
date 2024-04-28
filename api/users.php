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

$usersDB = 'database/users.json';
$users = [];

$usersJSON = file_get_contents($usersDB);
$users = json_decode($usersJSON, true);

$requestJSON = file_get_contents('php://input')



if ($requestMethod == 'POST'){ //registrera en ny användare
    $requiredKeys = ['username', 'email', 'password', 'rptpassword'];
    
    if(requestContainsAllKeys($requiredKeys) == false) {
        $error = ["Error" => "Bad request: Missing key(s)."];
        sendJSON($error, 400);
    }
    
    $highestID = 0;
    
    foreach ($users as $user) {
        if ($user["id"] > $highestID) {
            $highestID = $user["id"];
        }
    }
    
    $nextID = $highestID + 1;
    
    $addedUser = [];
    $addedUser["id"] = $nextID;

    foreach($requiredKeys as $key){
        $addedUser[$key] = 
    }


}









?>