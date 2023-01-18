const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const adressInput = document.getElementById('adress');
    const phoneInput = document.getElementById('phone');
    const productsInput = document.getElementById('products');
    const sizeInput = document.getElementById('size');
    const totalPrice = document.getElementById('total');
    const optionProduct = document.getElementsByClassName('optionProduct')
    const optionSize = document.getElementsByClassName('optionSize')
    

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        adress: adressInput.value,
        phone: phoneInput.value,
        products: productsInput.value,
        size: sizeInput.value
    }

    const errors = {
        firstName: false,
        lastName: false,
        adress: false,
        phone: false,
        products: false,
        size: false
    }

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const adressError = document.getElementById('adressError');
    const phoneError = document.getElementById('phoneError');
    const productsError = document.getElementById('productsError');
    const sizeError = document.getElementById('sizeError');

    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    adressError.style.display = 'none';
    phoneError.style.display = 'none';
    productsError.style.display = 'none';
    sizeError.style.display = 'none';

    if(!formData.firstName || !formData.lastName || !formData.adress || !formData.phone || !formData.products || !formData.size){
        const nameRegex = /^[a-zA-Z ]+$/;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
       

        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }

        if (!formData.lastName || !nameRegex.test(formData.lastName)) {
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.adress) {
            errors.adress = true;
            adressError.style.display = 'block';
        }

        // if (!formData.products) {
        //     errors.products = true;
        //     productsError.style.display = 'block';
        // }

        // if (!formData.size) {
        //     errors.size = true;
        //     sizeError.style.display = 'block';
        // }

        if(optionProduct == true){
            errors.products = true;
            productsError.style.display = 'block';
        }

        if(optionSize.value == true){
            errors.size = true;
            sizeError.style.display = 'block';
        }
    }

    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
})