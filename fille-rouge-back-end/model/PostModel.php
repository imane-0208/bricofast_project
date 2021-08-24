<?php
include_once __DIR__.'/../database/DB.php';

    class Post{

        function getPost($id){

            

            $sql="SELECT *  FROM `posts` ,  `categories`   WHERE `idPost`= '$id' and posts.idCtg = categories.idCategorie ";
            $query=DB::connect()->query($sql);
            return $query->fetchAll(PDO::FETCH_ASSOC);
        }

        function getAllPost(){

            $sql="SELECT * FROM `posts` ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
          
        }
        function getAllPosts(){

            $sql="SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg  ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
          
        }

        function getAllPostsClient($id){

            $sql="SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and p.idC = '$id' ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
          
        }

        function getpostbyville($ville){
            $sql="SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and p.ville = '$ville' ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
        }

        function getpostbycategory($cat){
            $sql="SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and c.categorie = '$cat' ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
        }

        function getpostfiltred($ville,$cat){
            $sql="SELECT p.*,u.LastName,u.FirstName,c.categorie FROM `posts` p , `users` u , `categories` c WHERE u.idUser = p.idC and c.idCategorie = p.idCtg and p.ville = '$ville' and c.categorie = '$cat' ORDER BY datePost DESC ";
            $query=DB::connect()->query($sql);
            $result = $query->fetchAll();
            return $result;
        }




        
        function SavePost($objectif,$idcategorie,$ville,$sujet,$idc)
        {
            $datep = date("Y-m-d");
            $sql='INSERT INTO `posts`(`objectif`, `idCtg`, `ville`,`sujet`, `datePost`,`idC`) VALUES ("'.$objectif.'","'.$idcategorie.'","'.$ville.'", "'.$sujet.'", "'.$datep.'","'.$idc.'")';
            
            $query=DB::connect()->query($sql);
        }


        function updatePost($idP,$objectif,$idcategorie,$ville,$sujet){
           
            /* $sql="UPDATE `posts` SET objectif='$objectif',idCtg='$idcategorie',ville ='$ville',sujet='$sujet' WHERE idPost='$idP'";
            // die($sql);
            $query=DB::connect()->query($sql); */
            $sql="UPDATE posts SET objectif='".$objectif."',idCtg=".$idcategorie.",ville ='".$ville."',sujet='".$sujet."' WHERE idPost=".$idP."";
            // die($sql);
            $query=DB::connect()->query($sql);
        }




        function delete($id){

            $sql="delete from `posts` where idPost=$id";
            $query=DB::connect()->query($sql);
        }

























        /* function save($date,$typeConsultation,$horaire,$reference){

            $sql='INSERT INTO `rendez-vous`(`date`, `typeConsultation`, `horaire`, `reference`) VALUES ("'.$date.'","'.$typeConsultation.'","'.$horaire.'", "'.$reference.'")';
            
            $query=DB::connect()->query($sql);
        }

        function edit($id){
   
            $sql="select * from `rendez-vous` where id=$id";

            $query=DB::connect()->query($sql);
            return $query->fetchAll();
        }

        function update($date,$horaire,$typeConsultation,$id){
           
            $sql="UPDATE `rendez-vous` SET date='$date',typeConsultation='$typeConsultation',horaire='$horaire' WHERE id = $id";
            // die($sql);
            $query=DB::connect()->query($sql);
        }

        function delete($id){

            $sql="delete from `rendez-vous` where id=$id";
            $query=DB::connect()->query($sql);
        }
        function horaire($date){
            $sql="SELECT distinct `horaire` FROM `rendez-vous` WHERE `date`= '$date'";

            $query=DB::connect()->query($sql);
            return $query->fetchAll();
            
        } */
    }



?>