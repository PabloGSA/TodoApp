const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    try{

        const user = {
            email: emailInput.value,
            passwor: passwordInput.value
        }
      await axios.post('/api/login', user);
    } catch (error) {
        console.log(error)

    }


    
    
});