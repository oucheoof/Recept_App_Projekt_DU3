<?php
    ini_set("display_errors", 1); 
    error_reporting(E_ALL);

    require_once "functions.php";

    $filename = "./database/recipes.json";

    $recipes = [];
    if (file_exists($filename)) {
        $json_encoded_data = file_get_contents($filename);
        $recipes = json_decode($json_encoded_data, true);
    }


    $method = $_SERVER["REQUEST_METHOD"];
    $allowedMethods = ["GET", "PATCH"];

    if (!in_array($method, $allowedMethods)) {
        $error = ["Error" => "Method is invalid"];
        sendJSON($error, 405);
    }

    $method_request_JSON = file_get_contents("php://input");
    $requestData = json_decode($method_request_JSON, true);

    if ($method == "GET") {
        if (isset($_GET["id"])) {
            $id = $_GET["id"];
            if (!is_numeric($id)) {
                $error = ["Error" => "Error, id is a string"];
                sendJSON($error, 400);
            }
            foreach ($recipes as $recpie) {
                if ($recpie["id"] == $id) {
                    sendJSON($recpie);
                }
            }

            $error = ["Error" => "ID not found"];
            sendJSON($error, 404);
        }
        sendJSON($recipes);
    }

    if ($method == "PATCH") {
        if (!isset($requestData["id"], $requestData["name"])) {
            $error = ["Error" => "Bad Request, Missing name"];
            sendJSON($error, 400);
        }

        $id = $requestData["id"];
        $newName = $requestData["name"];

        foreach ($recipes as $index => $recpie) {
            if ($recpie["id"] == $id) {
                $recpie["name"] = $newName; //Hjälper med hela patch för like nyckeln
                $recipes[$index] = $recpie;

                $json = json_encode($recipes, JSON_PRETTY_PRINT);
                file_put_contents($filename, $json);
                sendJSON($recpie);
                return;
            }
        }

        $error = ["Error" => "ID not found"];
        sendJSON($error, 404);
    }

?>