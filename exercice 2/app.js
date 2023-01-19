const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const phone = document.getElementById('phone');
    const products = document.querySelector('#products');
    const size = document.querySelector('#size');

    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        phone: phone.value,
        products: products.value,
        size: size.value
    }

    const errors = {
        firstName: false,
        lastName: false,
        address: false,
        phone: false,
        products: false,
        size: false
    }

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const productsError = document.getElementById('productsError');
    const sizeError = document.getElementById('sizeError');

    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    addressError.style.display = 'none';
    phoneError.style.display = 'none';
    productsError.style.display = 'none';
    sizeError.style.display = 'none';

    if(!formData.firstName || !formData.lastName || !formData.address || !formData.phone || !formData.products || !formData.size){
        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        const addressRegex = /(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/g;
        
        if(!formData.firstName || !nameRegex.test(formData.firstName)){
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }

        if(!formData.lastName || !nameRegex.test(formData.lastName)){
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }

        if(!formData.address || addressRegex.test(formData.address)){
            errors.address = true;
            addressError.style.display = 'block';
        }

        if(!formData.phone || !phoneRegex.test(formData.phone)){
            errors.phone = true;
            phoneError.style.display = 'block';
        }

        if(formData.products == "1"){
            errors.products = true;
            productsError.style.display = 'block';
        }


        if(formData.size == "1"){
            errors.size = true;
            sizeError.style.display = 'block';
        }

    }
    

})

