const form = document.querySelector('.login-form')

form.addEventListener('submit', onLoginForm)

function onLoginForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email
    const password = formElements.password;

    const formData = {
        email: email.value,
        password: password.value,
    }
    
    console.log(formData);
    form.reset();

    if (email === "" || password === "") {
        alert('Все поля должны быть заполнены');
        form.reset();
       return
    }
  
}

