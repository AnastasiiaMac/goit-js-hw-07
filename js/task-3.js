const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
        nameOutput.textContent = "Anonymous"   
    } else {
        nameOutput.textContent = event.currentTarget.value.trim()
    }
})