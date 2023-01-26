const form = document.getElementById('form')

let productsValid = false;
let sizeValid = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!productsValid || !sizeValid) {
        console.error("Veuillez remplir le formulaire correctement.");
    } else {
        console.log("Envoi effectué.");
    }

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

        if(formData.products == false){
            errors.products = true;
            productsError.style.display = 'block';
        }


        if(formData.size == false){
            errors.size = true;
            sizeError.style.display = 'block';
        }

    }
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
})

const productsPrice = {
    margarita : 5,
    pepperoni : 6,
    fromage : 7,
    napolitaine : 8
}

const sizesPrice = {
    small : 5,
    medium : 6,
    large : 7,
    extra : 8
}

const productSelect = document.getElementById('products');
const sizeSelect = document.getElementById('size');
const total = document.getElementById('total');

let totalPrice = 0;
let sizePrice = 0;
let productPrice = 0;

productSelect.addEventListener('change', () => {
    const productValue = productSelect.value;
    console.log(productValue)

    if(productValue && productValue.length > 0){
        productPrice = productsPrice[productValue];
        console.log(productPrice)
        productsValid = true;
    } else {
        productPrice = 0;
        productsValid = false;
    }
    total.innerHTML = `TOTAL : ${productPrice + sizePrice} €`;
});

sizeSelect.addEventListener('change', () => {
    const sizeValue = sizeSelect.value;

    if(sizeValue && sizeValue.length > 0){
        sizePrice = sizesPrice[sizeValue];
        sizeValid = true;
    } else {
        sizePrice = 0;
        sizeValid = false;
    }
    total.innerHTML = `TOTAL : ${productPrice + sizePrice} €`;
})



