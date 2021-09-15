const hexInput = document.getElementById("input-color");
const inputColor = document.getElementById("input-box");
const outputColor = document.getElementById("altered-box");
const invalidCol = document.getElementById("invalid-color");

const rangeVal = document.getElementById("range-value");
const rangeInput = document.getElementById("range");

const inputInfo = document.getElementById("input-info");
const outputInfo = document.getElementById("output-info");

let lighten = true;

hexInput.addEventListener("input", () => {
    const value = checkValidHex(hexInput.value);
    if (value) {
        let hex = hexInput.value;
        setColor(inputColor, hex);

        if (hex[0] === "#") hex = hex.substring(1);
        if (hex.length === 3) hex = convert6Hex(hex);
        validHex(hex);
    }
    else {
        clearColor(inputColor);

        invalidHex();
    }
});

/**
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
        num = convert6Hex(num);
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

function updateOutputColor(val) {
    let hex = hexInput.value;

    if (hex[0] === "#") hex = hex.substring(1);
    hex = convert6Hex(hex);
    
    // let newHex = val * 1;
    // newHex = "0000" + newHex;
    // hex = addHexColor(hex, newHex);
    
    let valNum = 0;
    if (lighten) {
        valNum = 100 + (12 * (parseInt(val)) );
    }
    else {
        valNum = 100 - val;
    }
    outputColor.style.filter = `brightness(${valNum}%)`;
    outputColor.style.backgroundColor ="#" + hex;

    outputInfo.innerText = `Altered Color: brightness(${valNum}%)`;
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

function validHex(hex) {
    rangeInput.disabled = false;
    invalidCol.classList.add("hidden");

    inputInfo.innerText = "Input Color: #" + hex;  
    
    outputColor.style.backgroundColor = "#" + hex;
    outputInfo.innerText = `Altered Color: brightness(${100}%)`;

}

function invalidHex() {
    rangeInput.disabled = true;

    rangeInput.value = 0;
    updateRangeValue(0);

    invalidCol.classList.remove("hidden");

    outputColor.style.backgroundColor = "";
    outputInfo.innerText = "Altered Color";
    inputInfo.innerText = "Input Color";
}

function convert6Hex(num) {
    if (num.length === 3) {
        num = num[0] + num[0] + num[1] + num[1] + num[2] + num[2];
    }
    return num;
}

function addHexColor(c1, c2) {
    var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    // if (hexStr.length > 6) return "ffffff";
    return hexStr;
}


