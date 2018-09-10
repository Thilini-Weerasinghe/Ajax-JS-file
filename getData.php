<?php
    $Obj = new stdClass;
    $Obj->id = 40;
    $Obj->text = "Hello Ajax";
    $json=json_encode($Obj);
    echo ($json);
?>