const hexInput = document.getElementById("input-color");
const inputColor = document.getElementById("input-box");
const invalidCol = document.getElementById("invalid-color");

const rangeVal = document.getElementById("range-value");
const rangeInput = document.getElementById("range");

hexInput.addEventListener("input", () => {
    const value = checkValidHex(hexInput.value);
    if (value) {
        let hex = hexInput.value;
        setColor(inputColor, hex);

        validHex();
    }
    else {
        clearColor(inputColor);

        invalidHex();
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


function updateRangeValue(val) {
    rangeVal.innerText =  val + "%";
}

// helper function 
function setColor(element, hex) {
    if (hex[0] !== "#")
            hex = "#" + hex;
    element.style.backgroundColor = hex;
}

function clearColor(element) {
    element.style.backgroundColor = "";
}

function validHex() {
    rangeInput.disabled = false;
    invalidCol.classList.add("hidden");
}

function invalidHex() {
    rangeInput.disabled = true;

    rangeInput.value = 0;
    updateRangeValue(0);

    invalidCol.classList.remove("hidden");
}


