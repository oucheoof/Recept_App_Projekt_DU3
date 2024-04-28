<?php

require_once("functions.php");

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