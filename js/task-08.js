const form = document.querySelector('.login-form')

form.addEventListener('submit', onLoginForm)



function onLoginForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены');
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}