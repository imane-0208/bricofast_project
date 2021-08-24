<?php
include_once __DIR__.'/../../model/PostModel.php';

class PostControler{


	 
	function getPost($id){
		$post = new Post;
        $query = $post->getPost($id);
        echo json_encode($query);
	}


	function getAllPost(){
		$post = new Post;
        $query = $post->getAllPost();
		foreach($query as $rows){
			$row[] = $rows;

		}
		echo json_encode($row);

		
	}

	function getAllPosts(){
		$post = new Post;
        $query = $post->getAllPosts();
		foreach($query as $rows){
			$row[] = $rows;

		}
		echo json_encode($row);

		
	}

	function getAllPostsClient($id){
		$post = new Post;
        $query = $post->getAllPostsClient($id);
		foreach($query as $rows){
			$row[] = $rows;

		}
		echo json_encode($row);

		
	}

	function getpostbyville(){
		header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Origin: *');
		$data=json_decode(file_get_contents('php://input'));
		$ville = $data->ville;
		$post = new Post;

        $query = $post->getpostbyville($ville);
		foreach($query as $rows){
			$row[] = $rows;

		}
		echo json_encode($row);

		
	}

	function getpostbycategory(){
		header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Origin: *');
		$data=json_decode(file_get_contents('php://input'));
		$cat = $data->categorie;
		$post = new Post;
		
        $query = $post->getpostbycategory($cat);
		foreach($query as $rows){
			$row[] = $rows;

		}
		echo json_encode($row);

		
	}


	function getpostfiltred(){
		header('Access-Control-Allow-Methods: POST');
        header('Access-Control-Allow-Origin: *');
		$data=json_decode(file_get_contents('php://input'));
		$ville = $data->ville;
		$cat = $data->categorie;
		$post = new Post;
		
        $query = $post->getpostfiltred($ville,$cat);
		foreach($query as $rows){
			$row[] = $rows;
		}
		echo json_encode($row);

		
	}



	

	    function SavePost(){

				header('Access-Control-Allow-Methods: POST');
					header('Access-Control-Allow-Origin: *');
					$requestBody=json_decode(file_get_contents('php://input'));

				$post = new Post;
				$query = $post->SavePost($requestBody->objectif,$requestBody->idCtg,$requestBody->ville,$requestBody->sujet,$requestBody->idC);
				echo json_encode($query);
		}

		function updatePost()
			{
				header('Access-Control-Allow-Methods: PUT'); 
				header('Access-Control-Allow-Origin: *');
				$requestBody= json_decode(file_get_contents('php://input'));
				$post = new Post;
				$post->updatePost($requestBody->idPost,$requestBody->objectif,$requestBody->idCtg,$requestBody->ville,$requestBody->sujet);

			}

			function delete($id)
	{
		
		header('Access-Control-Allow-Methods: DELETE');
		

			$post = new Post();
			$post->delete($id);

			echo "deleted";
		
	}








	/* function index($ref)
	{
		
		$rendez_vous = new Mrendez_vous();
		$groupes=$rendez_vous->getSelect($ref);
		echo json_encode($groupes);
		
	}

	function page_add(){
		require_once __DIR__.'/../../view/ajouter_un_créneau.php';
	}

	function save(){

		header('Access-Control-Allow-Methods: POST');
		$requestBody=json_decode(file_get_contents('php://input'));
				$groupe = new Mrendez_vous();
				if($groupe->save($requestBody->date,$requestBody->typeConsultation,$requestBody->horaire,$requestBody->reference)){
					echo "added";
				}else{
					echo "not added";
				}
				
	}

	function edit($id)
	{

			$groupe = new Mrendez_vous();
			$groupes=$groupe->edit($id);

			echo json_encode($groupes);

			// require_once __DIR__.'/../view/updateGroupe.php';

		
	}

	function update()
	{
		header('Access-Control-Allow-Methods: PUT'); 
		$requestBody= json_decode(file_get_contents('php://input'));
		
			$Mrendez_vous = new Mrendez_vous();
        $Mrendez_vous->update($requestBody->date,$requestBody->horaire,$requestBody->typeConsultation,$requestBody->id);

//{
//				
//				echo "updated";
//			}else{
//				echo "not updated";
//			}
			
			// header("location: http://localhost/www/brief_6_VueJs_API/rendez_vous/");
		
	}

	function delete($id)
	{
		
		header('Access-Control-Allow-Methods: DELETE');
		

			$Mrendez_vous = new Mrendez_vous();
			$Mrendez_vous->delete($id);

			echo "deleted";
		
	}

	function horaire($date){

		$horaire = new Mrendez_vous();
			$horaires=$horaire->horaire($date);

			echo json_encode($horaires);
	} */

	
}
