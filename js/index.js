const hexInput = document.getElementById("input-color");
const inputColor = document.getElementById("input-box");
const invalidCol = document.getElementById("invalid-color");

hexInput.addEventListener("input", () => {
    const value = checkValidHex(hexInput.value);
    if (value) {
        let hex = hexInput.value;
        if (hex[0] !== "#")
            hex = "#" + hex;
        inputColor.style.backgroundColor = hex;
        invalidCol.classList.add("hidden");
    }
    else {
        invalidCol.classList.remove("hidden");
        inputColor.style.backgroundColor = "";
    }
});

/**
 * 
 * @param {string} num 
 */
function checkValidHex(num) {
    isValid = true;

    // if starts with # remove #
    if (num[0] === "#") {
        num = num.substring(1);
    }

    // if 3 num hex style, convert 6 style
    if (num.length === 3) {
        num = num[0] + num[0] + num[1] + num[1] + num[2] + num[2];
    }

    if (num.length != 6) {
        isValid = false;
    } else if (isNaN(Number("0x" + num))) {
        isValid = false;
    }

    return isValid;   
}


