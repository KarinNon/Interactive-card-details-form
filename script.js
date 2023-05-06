var inputBox = document.getElementById("input-box");
var icon = document.getElementById("error-icon");
var invalidText = document.getElementById("invalid-text");
var submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    var email = inputBox.value;
    var foo = false;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            foo = true;
        }
    }

    if (foo == true) {
        inputBox.style.outline = "1px solid hsl(0, 36%, 70%)"
        icon.style.display = "none";
        invalidText.style.display = "none";
    } else {
        inputBox.style.outline = "2px solid hsl(0, 93%, 68%)"
        icon.style.display = "block";   
        invalidText.style.display = "block";
    }

    invalidText.innerHTML = text;
})