<?php
//include_once __DIR__.'/../database/DB.php';


class Bricoleur{
    function getSelect($ref){

        // $user = $_SESSION['user'][0]['reference'];

        $sql="SELECT * FROM `rendez-vous` WHERE `reference`= '$ref'";
//            die($sql);
        $query=DB::connect()->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

}