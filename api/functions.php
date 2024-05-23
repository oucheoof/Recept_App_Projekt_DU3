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
    
    function anyEmpty($array) {
        foreach ($array as $element) {
            if ($element === "") {
                return true; // If any element is an empty string, return true
            }
        }
        return false; // If no element is an empty string, return false
    }
?>