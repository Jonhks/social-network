// Imputs
const inputName = document.getElementById('icon_name');
const inputEmail = document.getElementById('icon_email');
const inputPassword = document.getElementById('icon_password');
const inputPassword2 = document.getElementById('icon_password-2');
const modalBox = document.getElementById('modal1');


// botons
const google = document.getElementById('google');
const login = document.getElementById('login');
const singup = document.getElementById('singup');

google.addEventListener('click', getProvider);


singup.addEventListener('click', event =>{
  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('pass', password);
  createUserWithEmailAndPassword(
    email,
    password
    // inputPassword2.value
  );
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  //   // ...
  });
});
createUserWithEmailAndPassword = (email, password) => {
  location.href = '../views/muro.html';
  console.log(email, password);
};

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
