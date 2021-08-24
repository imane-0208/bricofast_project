<?php
include_once __DIR__.'/../database/DB.php';

    class User{

        function getUser($idUser){

                $sql = "select * from users where idUser = '$idUser' ";
                $query = DB::connect()->query($sql);
                $row = $query->fetch(PDO::FETCH_ASSOC);
                //$rowCount = $query->rowCount();
                return $row ;
                
            }

            function login($email,$password){

                $sql = "select * from users where email = '$email' and password='$password' ";
                $query = DB::connect()->query($sql);
                $row = $query->fetch(PDO::FETCH_ASSOC);
               /*  echo $row; */
                $rowCount = $query->rowCount();
                if ($rowCount>0) {
                    $rows = array( $row['idUser'],$row['idRole'], $row['email'], $row['password'] ) ;
                    return $rows;
                 }else{
                    echo "not found";
                }
                
            
               
                
            }

            /* function registerr($nom,$prenom,$idRole,$email,$password){

                $sql="INSERT INTO `users`(`LastName`, `FirstName`, `idRole` , `email`, `password`) VALUES ('$nom','$prenom','$idRole','$email','$password')";

                $query=DB::connect()->query($sql);
                return $idRole;

            } */

            function getLasInserted(){

                $sql="SELECT * FROM users ORDER BY idUser DESC LIMIT 1";
            
               $query=DB::connect()->query($sql);
            
              $row = $query->fetch(PDO::FETCH_ASSOC);
            
                   return $row['idUser']; 
            
            }



            public function register($nom,$prenom,$idRole,$email,$password){
                $checkuser  = ("SELECT idUser FROM users WHERE email='$email'");
                $check = DB::connect()->query($checkuser) ; 
                 
                $result    =   $check->rowCount(); 
                if ($result == 0) {  
                    
                    $registerUser = "INSERT INTO `users`(`LastName`, `FirstName`, `idRole` , `email`, `password`) VALUES ('$nom','$prenom','$idRole','$email','$password')";
                    $query=DB::connect()->query($registerUser);
                    $iduser  = $this->getLasInserted();
                    //echo $iduser;

                    $getRole = "SELECT * FROM users WHERE idUser ='$iduser' ";
                    $query=DB::connect()->query($getRole);
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    $role = $row['idRole'];

                    if($role==2){
                         $client ="INSERT INTO client (`idClient`) VALUES ('$iduser')";
                         $addclient =DB::connect()->query($client);
                         


                    }elseif($role==3){
                        $bricoleur ="INSERT INTO bricouleur (`idBricouleur`,`ville`,`tele`,`photo`,`idcat`) VALUES ('$iduser',' ',null,' ',null)";
                       $addbricoleur =DB::connect()->query($bricoleur);  

                    }
                } 
            }

            

            function getclient($idclient){

                $sql = "select * from client where idClient = '$idclient'";
                $query = DB::connect()->query($sql);
                $row = $query->fetch(PDO::FETCH_ASSOC);
                //$rowCount = $query->rowCount();
                return $row ;
                
            }
            function getBricoleur($idbricoleur){

                $sql = "select * from bricouleur where idBricouleur = '$idbricoleur'";
                $query = DB::connect()->query($sql);
                $row = $query->fetch(PDO::FETCH_ASSOC);
                //$rowCount = $query->rowCount();
                return $row ;
                
            }

            function update($idB,$ville,$tele,$photo){ 
           
                $sql="UPDATE `bricouleur` SET ville='$ville',tele='$tele',photo='$photo' WHERE idBricouleur = $idB";
                // die($sql);
                $query=DB::connect()->query($sql);
            }




            

           

        }
      
?>