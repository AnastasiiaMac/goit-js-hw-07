const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault()
    const formData = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim()
    };
    
    if (formData.email === "" || formData.password === "") {
        return alert("All form fields must be filled in");
    }
    console.log(formData)
    event.target.reset()
})

