<?php
    require_once("functions.php");

    $requestMethod = $_SERVER['REQUEST_METHOD'];
    if($requestMethod !== 'PATCH'){
    $error = ["Error" => "Invalid request method"];
    sendJSON($error, 405);
}

if($requestMethod == "PATCH"){
    $rqst_data = getRequestData();
    $filename = "./database/recipes.json";

    if(file_exists($filename)){ 
        $json_encoded_data = file_get_contents($filename); 
        $recipes = json_decode($json_encoded_data, true);
    }
    
    if(!isset($rqst_data["user_id"]) && !isset($rqst_data["recipe_id"])){
        $error = ["Error" => "user id and recipe id not found"];
        sendJSON($error, 400);
    }
    
    $user_id = $rqst_data["user_id"];
    $recipe_id = $rqst_data["recipe_id"];

    foreach($recipes["recipes"] as $recipe_index => $recipe){
        if($recipe_id == $recipe["id"]){

            if(in_array($user_id, $recipe["like"])){
                //ta bort like
                foreach($recipe["like"] as $index => $compare_user_id){
                    if($compare_user_id == $user_id){
                        array_splice($recipe["like"], $index, 1);
                    }
                }
            }
            else{
                //lägg till like
                $recipe["like"][] = $user_id;
            }

            array_splice($recipes["recipes"], $recipe_index, 1, [$recipe]);

            $encodedData = json_encode($recipes, JSON_PRETTY_PRINT);
            file_put_contents($filename, $encodedData);
      
            sendJSON( $recipe);
        }

    }

}
?>