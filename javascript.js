document.addEventListener("DOMContentLoaded", function () {


    const pxInput = document.getElementById("pxInput");
    const convertButton = document.getElementById("convertButton");
    const remOutput = document.getElementById("remOutput");

    convertButton.addEventListener("click", function () {

        const pxValue = parseFloat(pxInput.value);

        if (!isNaN(pxValue)) { 

            const remValue = pxValue / 16; 

            remOutput.textContent = `${remValue.toFixed(2)} rem`;

        } else {
            remOutput.textContent = "invalid input.";
        }
    });
});
