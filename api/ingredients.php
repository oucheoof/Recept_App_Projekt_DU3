<?php
    ini_set("display_errors", 1); 
    error_reporting(E_ALL);

    require_once "functions.php";

    $filename = "./database/ingredients.json";
    
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $requestData = getRequestData();

    $ingredients = [];
    if (file_exists($filename)) {
        $json_encoded_data = file_get_contents($filename);
        $ingredients = json_decode($json_encoded_data, true);
    }
    
    if ($requestMethod == "GET") {
        sendJSON($ingredients);
    }else{
        $error = ["Error" => "Method is invalid"];
        sendJSON($error, 405);
    }
