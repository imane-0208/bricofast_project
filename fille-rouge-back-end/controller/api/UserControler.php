<?php
include_once __DIR__.'/../../model/UserModel.php';


    class UserControler{



        function getUser($id){

                $user = new User;
                $query = $user->getUser($id);
            echo json_encode($query);
               
        }

        function login(){

            header('Access-Control-Allow-Methods: POST');
            header('Access-Control-Allow-Origin: *');

            $data=json_decode(file_get_contents('php://input'));
            $mail = $data->email;
            $pass = $data->password;
            
            $user = new User;
            $values =$user->login($mail,$pass);
            echo json_encode($values);
            
           
        }



        function register(){

            header('Access-Control-Allow-Methods: POST');
            header('Access-Control-Allow-Origin: *');
            $requestBody=json_decode(file_get_contents('php://input'));

 

                $user = new User; 
                $query = $user->register($requestBody->LastName,$requestBody->FirstName,$requestBody->idRole,$requestBody->email,$requestBody->password);
                return $requestBody->idRole;
                //echo $requestBody->idRole;


            }


            function getclient($id){

                $user = new User;
                $query = $user->getclient($id);
            echo json_encode($query);
               
        }

        
        function getBricoleur($id){

            $user = new User;
            $query = $user->getBricoleur($id);
        echo json_encode($query);
           
    }


    function update()
	{
		header('Access-Control-Allow-Methods: PUT'); 
		$requestBody= json_decode(file_get_contents('php://input'));
		
			$user = new User();
        $user->update($requestBody->idB,$requestBody->ville,$requestBody->tele,$requestBody->photo);

		
	}


            





           
        }

     
    

?>