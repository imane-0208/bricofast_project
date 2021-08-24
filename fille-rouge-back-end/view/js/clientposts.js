
let output = '';
let idclient = sessionStorage.getItem('idUser');
const container = document.querySelector('.container');
let idPost = null ;
let IdPost = null;

window.onload = function() {
  container.innerHTML= `<div class="row interface">
  <p><i class="far fa-check-circle"></i></p>
  <h3>Bienvenue sur votre espace</h3>
  <div class="d-flex justify-content-center btns">
      <a href="post.html" class="btn ">poster</a>
      <a href="allPosts.html" class="btn ">explorer</a>
      <a href="" class="btn ">chercher</a>
  </div>
</div>` ;
};


document.getElementById('myposts').addEventListener('click', function(e){
  e.preventDefault();
  // container.innerHTML = '';

  container.innerHTML =`<div class="row mt-5 mb-5 d-flex justify-content-center  flex-wrap myposts "></div>`;

  const posts = document.querySelector('.myposts');
  // posts.innerHTML= '';
  output = '';


  
  fetch('http://localhost/www/fille-rouge-back-end/post/getAllPostsClient/'+ idclient )
     
      .then(res => res.json())
          .then(data =>{
              data.forEach(post => {
                 
                      output += `<div class="card" style="width: 20rem; margin-left: 1%; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                      <div class="card-body">

                        <h5 class="card-title">${post.objectif}</h5>
                        <input type="hidden" class="form-control" id="idp" value="${post.idPost}">
                        <p class="card-text">Categorie: ${post.categorie}</p>
                        <p class="card-text">Ville: ${post.ville}</p>
                        <p class="card-text">Date: ${post.datePost}</p>
                        <p class="card-text">Sujet: ${post.sujet}</p>


                        <a href="#" class="card-link btn" style="text-decoration:none; color:#00A71C; font-size:30px;" data-toggle="modal" data-target="#edit" onclick="getPost(${post.idPost})"><i class="fas fa-edit"></i></a>
                        <a href="espaceClient.html" class="card-link btn" style="text-decoration:none; color:#E50000; font-size:30px;" onclick="deletePost(${post.idPost})"><i class="fas fa-trash-alt"></i></a>

                        <div id= "modaledit"></div>



                        
                      </div>
                    </div>` ;
                    
              });
              posts.innerHTML = output;
              
  
          });
          
          
        });



// update postes




        function getPost(id){
             idPost = id;
             console.log(idPost);

             container.innerHTML =`<div class="row mt-5 mb-5 d-flex justify-content-center  flex-wrap myposts "></div>`;

  const posts = document.querySelector('.myposts');
  // posts.innerHTML= '';
  output = '';


  
  fetch('http://localhost/www/fille-rouge-back-end/post/getPost/'+ idPost )
     
      .then(res => res.json())
          .then(data =>{
              data.forEach(post => {
                 
                      output += `<div class="card" style="width: 60rem; margin-left: 1%; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                      <div class="card-body">
                      <form id="post">
                      <div class="mb-3">
                        <label for="objectif" class="form-label fw-bold"> <span><i class="fas fa-object-group" ></i></span> Objectif du poste</label>
                        <input type="text" class="form-control" id="objectif"  value="${post.objectif}">
                        
                      </div>
                      <div class="mb-3">
                          <label for="categorie" class="form-label fw-bold"> <span><i class="fas fa-briefcase"></i></span> Selectionner une categorie</label>
                          <!-- <input type="email" class="form-control" id="categorie" aria-describedby="emailHelp" placeholder= "categorie ..."> -->
                          <select name="" class="form-control" id="categorie">
                              <option value="${post.idCat}">${post.categorie}</option>
                              <option value="1">menuisrie</option>
                              <option value="2">peinture</option>
                              <option value="3">plomberie</option>
                              <option value="4">électroménager</option>
                              <option value="5">électricité</option>

                          </select>
                          
                        </div>
                        <div class="mb-3">
                          <label for="ville" class="form-label fw-bold"> <span><i class="fas fa-map-marker-alt"></i></span> Indiquer votre actuel ville</label>
                          <input type="text*" class="form-control" id="ville" aria-describedby="emailHelp" value="${post.ville}">
                          
                        </div>
                      <div class="mb-3">
                        <label for="sujet" class="form-label fw-bold"><i class="fa fa-align-left"></i> Sujet du poste</label>
                        
                        <textarea name="" id="sujet" class="form-control" cols="30" rows="10" >${post.sujet}</textarea>
                      </div>
                      <div class="float-end mt-3">
                          <a href="espaceClient.html" class="btn btn-secondary " onclick="deletePost(${idPost})">Annuler</a hr>
                          <button type="button" class="btn btn-warning " onclick="updatePost(${idPost})">Enregistrer les changement</button>
                      </div>

                    </form>

                      </div>
                    </div>` ;
                    
              });
              posts.innerHTML = output;
              
  
          });

        }

        function  updatePost(idp){
          IdPost = idp;
          console.log(IdPost);
          // e.preventDefault();


              const objectif = document.getElementById('objectif');
              const categorie = document.getElementById('categorie');
              const ville = document.getElementById('ville');
              const sujet = document.getElementById('sujet');
              console.log(objectif.value);
              console.log(ville.value);


    fetch('http://localhost/www/fille-rouge-back-end/post/updatePost', {
        method: 'PUT',
        headers: {'Content_Type':'application/json'},
        body: JSON.stringify({
            "idPost": IdPost,
            "objectif": objectif.value, 
            "idCtg":categorie.value, 
            "ville":ville.value,
            "sujet": sujet.value
        })
    })
    .then(function(response){
      console.log(response.json);
      return response.json;

    })
        .then(data =>{
            const dataArr = [];
            dataArr.push(data);
            // document.location.href = "../view/allposts.html";
            
        })

          
        }


        function deletePost(id){
          idPost = id;
          fetch('http://localhost/www/fille-rouge-back-end/post/delete/' + idPost, {
            method: 'DELETE',
            headers: {'Content_Type':'application/json'}
           

              }).then(response => {
                return response.json()
            })
            .then(data => 
                console.log(data) 
            );

    }

        function deconnect(){
         
            sessionStorage.clear();
            document.location.href = "../view/login.html";
            
          }
       


