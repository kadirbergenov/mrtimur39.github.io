function generatePassword() {
    var length = num.value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+!№;%:?*1234567890",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    text.value = retVal;
    inp.innerText = document.cookie;
    document.cookie = "l=" + retVal + ";";
}

function copy(){
    navigator.clipboard.writeText(text.value);
}

text = document.getElementById("text");
reset = document.getElementById("reset");
Copy = document.getElementById("copy");
inp = document.getElementById("inp");
num = document.getElementById("num");

num.value = 8;


generatePassword();
