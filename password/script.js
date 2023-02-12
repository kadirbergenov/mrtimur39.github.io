function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    text.value = retVal;
}

function copy(){
    navigator.clipboard.writeText(text.value);
}

text = document.getElementById("text");
reset = document.getElementById("reset");
Copy = document.getElementById("copy");

generatePassword();
//reset.onclick(e => text.value = generatePassword())