import * as FirebaseInit from '/firebase/firebaseInit.js';

// *Check if there's an active user
FirebaseInit.checkActiveUser()
            .then(() => {
                console.log('successfully logged in');
            }, function() {
                console.log('No user exists'); 
            });

// * Sign in of user
$('#signUp').click(signUp);
function signUp () {
    let userEmail = $('#signup_Email').val();
    let userPassword = $('#signup_Password').val();
    FirebaseInit.signUpUser (userEmail, userPassword)
                .then(() => {
                    window.location.href = "/html/mainPage.html";
                    console.log("Created User");
                }, function() {
                    $('#errorAlert').show();
                    console.log('failed to create user');
                })
    
}
