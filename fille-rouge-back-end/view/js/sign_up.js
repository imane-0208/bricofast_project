
/* var cors = require('cors');
app.use(cors()); */
const signup = document.getElementById('signup');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const role = document.getElementById('role');
const email = document.getElementById('email');
const pw = document.getElementById('password');



signup.addEventListener('submit' , function(e){
    e.preventDefault();


    /* const formData = new FormData(this);
    const data = new URLSearchParams();
    for (const p of formData){
        data.append(p[0],p[1]);
    } */


    fetch('http://localhost/www/fille-rouge-back-end/user/register', {
        method: 'POST',
        headers: {'Content_Type':'application/json'},
        body: JSON.stringify({
            "LastName": fname.value, 
            "FirstName":lname.value, 
            "idRole":role.value,
            "email": email.value,
            "password":pw.value
        })
    })
    .then(function(response){
        return response.json;

    })
        .then(data =>{
            const dataArr = [];
            dataArr.push(data);
            
            
        })

        
        



    /* fetch('http://localhost/www/fille-rouge-back-end/user/register', {
        method: 'post',
        body: data 

    }).then(function(response){
        return response.text();

    }).then(function (text){
        console.log(text);
    }).catch(function(error){
        console.error(error);

    }) */
})