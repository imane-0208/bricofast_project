document.getElementById('login').addEventListener('submit', LogIn);
const email = document.getElementById('email');
const pw = document.getElementById('password');

function LogIn(e) {
    e.preventDefault();


    
    
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "email": email.value,
        "password": pw.value
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("http://localhost/www/fille-rouge-back-end/user/login", requestOptions)
    .then(response => response.json())
    
    .then(result => {
        console.log(result);
        sessionStorage.setItem("idUser", result[0]);
        sessionStorage.setItem("idRole", result[1]);
        
        if (sessionStorage.getItem('idRole') == 2) {
            document.location.href = "../view/espaceClient.html"
        } else if (sessionStorage.getItem('idRole') == 3) {
            document.location.href = "../view/profile.html"
            
        }
    })
    //.catch(error => console.log('error', error));
    
    
    









    
    // fetch("http://localhost/www/fille-rouge-back-end/user/login", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         "email": email.value,
    //         "password": pw.value
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then(console.log())
    //     .then((data) => console.log(data));
}