const adminCredentials = {
    email : 'admin@empher.com',
    password : 'empher@123'
}
const loginForm = document.getElementById('login-form');
const userEmailInput = document.getElementById('email');
const userPasswordInput = document.getElementById('password');
const errormsg = document.getElementById('error-message');

// submission
loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const useremail = userEmailInput.value
    const userpassword = userPasswordInput.value
    // now we have to validate the cred
    if (useremail=== adminCredentials.email && userpassword===adminCredentials.password){
        //if this is true go to admin page
        window.location.href = 'admin.html';
    }
    else{
        alert('please write correct Credentials!!!!' )
    }
})