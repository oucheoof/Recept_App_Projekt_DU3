<?php
    function sendJSON($data, $status_code = 200){
        header("Content-Type: application/json");
        http_response_code($status_code); 
        $json_encoded_data = json_encode($data);
        echo $json_encoded_data;
        exit(); 
    }

    function requestContainsAllKeys($array){
        foreach($array as $value){
            if(!isset($value) || $value === null || $value === ""){
                return false;
            }
        }

        return true;
    }
?>