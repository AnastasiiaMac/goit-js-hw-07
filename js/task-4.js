const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault()
    if (event.target.elements.email.value === "".trim() || event.target.elements.password.value === "".trim()) {
       return alert("All form fields must be filled in") 
    }
    console.log(`Email: ${event.target.elements.email.value.trim()}, Password:${event.target.elements.password.value.trim()}`)
    event.target.reset()
})

