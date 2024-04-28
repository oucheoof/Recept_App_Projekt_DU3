<!-- 
 users.php är för att:
    registrera nya användare genom metoden 'POST'
    radera användare genom metoden 'DELETE'
-->

<?php

require_once('functions.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];

if($requestMethod !== 'POST' && $requestMethod !== 'DELETE'){
    $error = ["Error" => "Invalid request method"];
    sendJSON($error, 405);
}

if ($requestMethod == 'POST'){ //registrera en ny användare
    $requiredKeys = ['username', 'email', 'password', 'rptpassword'];
    $

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

?>