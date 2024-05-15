<?php
    function sendJSON($data, $status_code = 200){
        header("Content-Type: application/json");
        http_response_code($status_code); 
        $json_encoded_data = json_encode($data);
        echo $json_encoded_data;
        exit(); 
    }

    //checkar ifall alla nycklar i arrayen är satta och innehåller värden
    function requestContainsAllKeys($array){
        
        foreach($array as $value){
            if(!isset($value) || $value === null || $value === ""){
                return false;
            }
        }

        return true;
    }

    // omvandlar datan från the request
    function getRequestData(){
        $json = file_get_contents('php://input');
        return json_decode($json, true);
    }
/*     function getDatabase($filename){
        
    $databaseContents = file_get_contents(`${$filename}.json`);
    $databaseData = json_decode($databaseContents, true);
    
    if (is_array($databaseData) == false) {
       $error = ["Error" => "Internal server error, invalid database"];
       sendJSON($error, 500);
    }

    return $databaseData;
    } */
?>