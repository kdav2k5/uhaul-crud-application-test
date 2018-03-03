//constructor for users



// api call using ajax and json

const userRequest = new XMLHttpRequest();
    userRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
    userRequest.onload = function(){
        //const webData = JSON.parse(request.responseText);
       console.log(userRequest.responseText);
    };
userRequest.send();


