const posts = document.querySelector('.posts');
let output = '';

/* const objectif = document.getElementById('objectif');
const categorie = document.getElementById('categorie');
const ville = document.getElementById('ville');
const sujet = document.getElementById('sujet');
const idClient = sessionStorage.getItem("idUser"); */




    fetch('http://localhost/www/fille-rouge-back-end/post/getAllPosts')
   
    .then(res => res.json())
        .then(data =>{
            data.forEach(post => {
               
                    output += `<div class="card mb-3 style="width:100%">
                    <h4 class="card-header" style="background-color:white; border:none; color:#100064;">${post.objectif}</h4>
                    <p class="mb-1 mt-2" style="margin-left:3%; color:#100064; font-size:18px;"><span><i class="fas fa-user"></i></span><span> ${post.LastName}</span> <span> ${post.FirstName}</span></p>
                    <p class="mb-1" style="margin-left:3%; color:#100064; font-size:18px;"><i class="fas fa-map-marker-alt"></i> ${post.ville}</p>
                    <div class="card-body" style="color:#919191;">
                      <p class="card-title" style="margin-left:3%; font-weight:600;"> Domaine: ${post.categorie}</p>
                      <p class="card-text" style="margin-left:3%;">${post.sujet} </p>
                      <p class="card-text" style="font-size:15px;">${post.datePost} </p>
                      <a href="#" class="btn mt-3" style="margin-left:3%; background-color:#005BA5; color:white">Contacter</a>
                    </div>
                  </div>` ;

                
            });
            posts.innerHTML = output;

        })


        document.querySelector('#filtre').addEventListener('submit', filtrer);
        const ville = document.getElementById('ville');
       
        const categorie = document.getElementById('categorie');

    function filtrer(e) {
    e.preventDefault();
    


    
    if(ville.value.length !== 0 && categorie.value.length == 0){


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "ville": ville.value
        /* "categorie": categorie.value */
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("http://localhost/www/fille-rouge-back-end/post/getpostbyville", requestOptions)
    .then(response => response.json())
    
    .then(data =>{
        posts.innerHTML ='';
        output= '';
        data.forEach(post => {
           
           
                output += `<div class="card mb-3 w-100">
                <h4 class="card-header" style="background-color:white; border:none; color:#100064;">${post.objectif}</h4>
                <p class="mb-1 mt-2" style="margin-left:3%; color:#100064; font-size:18px;"><span><i class="fas fa-user"></i> ${post.LastName} ${post.FirstName}</p>
                <p class="mb-1" style="margin-left:3%; color:#100064; font-size:18px;"><i class="fas fa-map-marker-alt"></i> ${post.ville}</p>
                <div class="card-body" style="color:#919191;">
                  <p class="card-title" style="margin-left:3%; font-weight:600;"> Domaine: ${post.categorie}</p>
                  <p class="card-text" style="margin-left:3%;">${post.sujet} </p>
                  <p class="card-text" style="font-size:15px;">${post.datePost} </p>
                  <a href="#" class="btn mt-3" style="margin-left:3%; background-color:#005BA5; color:white">Contacter</a>
                </div>
              </div>` ;

            
        });
        posts.innerHTML = output;

    })
    .catch(error => console.log('error', error));

    }

    else if(ville.value.length == 0 && categorie.value.length !== 0){



        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        //"ville": ville.value
        "categorie": categorie.value
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("http://localhost/www/fille-rouge-back-end/post/getpostbycategory", requestOptions)
    .then(response => response.json())
    
    .then(data =>{
        posts.innerHTML ='';
        output= '';
        data.forEach(post => {
           
           
                output += `<div class="card mb-3">
                <h4 class="card-header" style="background-color:white; border:none; color:#100064;">${post.objectif}</h4>
                <p class="mb-1 mt-2" style="margin-left:3%; color:#100064; font-size:18px;"><span><i class="fas fa-user"></i> ${post.LastName} ${post.FirstName}</p>
                <p class="mb-1" style="margin-left:3%; color:#100064; font-size:18px;"><i class="fas fa-map-marker-alt"></i> ${post.ville}</p>
                <div class="card-body" style="color:#919191;">
                  <p class="card-title" style="margin-left:3%; font-weight:600;"> Domaine: ${post.categorie}</p>
                  <p class="card-text" style="margin-left:3%;">${post.sujet} </p>
                  <p class="card-text" style="font-size:15px;">${post.datePost} </p>
                  <a href="#" class="btn mt-3" style="margin-left:3%; background-color:#005BA5; color:white">Contacter</a>
                </div>
              </div>` ;

            
        });
        posts.innerHTML = output;

    })
    .catch(error => console.log('error', error));

    }

    else if(ville.value.length !== 0 && categorie.value.length !== 0){
        console.log(ville.value);
        console.log(categorie.value);



        var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "ville": ville.value,
        "categorie": categorie.value
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("http://localhost/www/fille-rouge-back-end/post/getpostfiltred", requestOptions)
    .then(response => response.json())
    .then(data =>{
        posts.innerHTML = '';
        output= '';
        data.forEach(post => {
           
           
                output += `<div class="card mb-3">
                <h4 class="card-header" style="background-color:white; border:none; color:#100064;">${post.objectif}</h4>
                <p class="mb-1 mt-2" style="margin-left:3%; color:#100064; font-size:18px;"><span><i class="fas fa-user"></i> ${post.LastName} ${post.FirstName}</p>
                <p class="mb-1" style="margin-left:3%; color:#100064; font-size:18px;"><i class="fas fa-map-marker-alt"></i> ${post.ville}</p>
                <div class="card-body" style="color:#919191;">
                  <p class="card-title" style="margin-left:3%; font-weight:600;"> Domaine: ${post.categorie}</p>
                  <p class="card-text" style="margin-left:3%;">${post.sujet} </p>
                  <p class="card-text" style="font-size:15px;">${post.datePost} </p>
                  <a href="#" class="btn mt-3" style="margin-left:3%; background-color:#005BA5; color:white">Contacter</a>
                </div>
              </div>` ;

            
        });
        posts.innerHTML = output;

    });
    // .catch(error => console.log('error', error));

    }
    
    
}