<?php
    ini_set("display_errors", 1); 
    error_reporting(E_ALL);

    require_once "functions.php";

    $filename = "./database/ingredients.json";

    $ingredients = [];
    if (file_exists($filename)) {
        $json_encoded_data = file_get_contents($filename);
        $ingredients = json_decode($json_encoded_data, true);
    }

    $method = $_SERVER["REQUEST_METHOD"];
    $allowedMethods = ["GET"]; 

    if (!in_array($method, $allowedMethods)) {
        $error = ["Error" => "Method is invalid"];
        sendJSON($error, 405);
    }

    $method_request_JSON = file_get_contents("php://input");
    $requestData = json_decode($method_request_JSON, true);
    
    if ($method == "GET") {
        sendJSON($ingredients);
    }

/*     if ($method == "POST") { //Hur ska post (filtreringen) fungera med de 2 boxarna?

        $ingredients = ["tomat", "pasta", "mjölk", "grädde"];

        $at_least_one_empty = false;


        foreach ($ingredients as $ingredient) {
            if (!isset($requestData[$ingredient])) {
                $at_least_one_empty = true;
            } else {
                ${$ingredient} = $requestData[$ingredient];
            }
        }

        if ($at_least_one_empty == true) {
            $error = ["Error" => "One or more keys are empty"];
            sendJSON($error, 400);
        }

        if (is_numeric($rating) && $rating > 5) {
            $error = ["Error" => "Rating has to be 5 or lower"];
            sendJSON($error, 400);
        }



        $highestId = 0;

        foreach ($ingredients as $ingredient) {
            if ($ingredient["id"] > $highestId) {
                $highestId = $ingredient["id"];
            }
        }

        $title = $requestData["title"];
        $nextId = $highestId + 1;
        $newIngredient = [
        ];
        $ingredients[] = $newMovie;
        $json = json_encode($ingredients, JSON_PRETTY_PRINT);
        file_put_contents($filename, $json);
        sendJSON($newMovie);

    }


    if ($method == "DELETE") {
        if (!isset($requestData["id"])) { //Hur ska delete (filtreringen) fungera med de 2 boxarna?
            $error = ["Error" => "Bad Request"];
            sendJSON($error, 400);
        }

        $id = $requestData["id"];

        foreach ($ingredients as $index => $ingredient) {
            if ($ingredient["id"] == $id) {
                array_splice($ingredients, $index, 1);
                $json = json_encode($ingredients, JSON_PRETTY_PRINT);
                file_put_contents($filename, $json);
                sendJSON($ingredient);
            }
        }

        $error = ["Error" => "Not found"];
        sendJSON($error, 404);
    }

?> */