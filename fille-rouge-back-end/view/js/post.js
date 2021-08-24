if (sessionStorage.length == 0) {
    document.location.href = "../view/login.html";

}


const post = document.getElementById('post');
const objectif = document.getElementById('objectif');
const categorie = document.getElementById('categorie');
const ville = document.getElementById('ville');
const sujet = document.getElementById('sujet');
const idClient = sessionStorage.getItem("idUser");

post.addEventListener('submit' , function(e){
    e.preventDefault();


    fetch('http://localhost/www/fille-rouge-back-end/post/SavePost', {
        method: 'POST',
        headers: {'Content_Type':'application/json'},
        body: JSON.stringify({
            "objectif": objectif.value, 
            "idCtg":categorie.value, 
            "ville":ville.value,
            "sujet": sujet.value,
            "idC": idClient
        })
    })
    .then(function(response){
        return response.json;

    })
        .then(data =>{
            const dataArr = [];
            dataArr.push(data);
            document.location.href = "../view/allposts.html";
            
        })

    })