const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (event) =>{
    
    event.preventDefault();


    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value,
    }
    const errors = {
        name: false,
        email: false,
        phone: false,
        password: false
    }

    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPhone = document.getElementById("errorPhone");
    const errorPassword = document.getElementById("errorPassword");

    errorName.style.display = 'none';
    errorEmail.style.display = 'none';
    errorPhone.style.display = 'none';
    errorPassword.style.display = 'none';

    if(!formData.name || !formData.email || !formData.phone || !formData.password){

        const nameRegex = /^[a-z0-9]{MIN_CHARS,MAX_CHARS}$/i;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{minlength,maxlength}$/;
        
        //Test le nom
        if(!formData.name || !nameRegex.test(formData.name)){
            errors.name = true;
            errorName.style.display = 'block';
        }

        if(!formData.email || !emailRegex.test(formData.email)){
            errors.email = true;
            errorEmail.style.display = 'block';
        }

        if(!formData.phone || !phoneRegex.test(formData.phone)){
            errors.phone = true;
            errorPhone.style.display = 'block';
        }

        if(!formData.password || !passwordRegex.test(formData.password)){
            errors.password = true;
            errorPassword.style.display = 'block';

        }
    }

    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
})