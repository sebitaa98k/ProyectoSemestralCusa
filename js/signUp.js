const signupForm = document.querySelector('#signForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').values
    const email = document.querySelector('#email').values
    const password = document.querySelector('#password').values
    
    const USers = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = USers.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya está registrado!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Existoso')
    window.location.href = 'login.html'
})