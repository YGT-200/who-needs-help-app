const toggleHelpSign = (button, image, statusText, helpSignIsOn) => {
    if (helpSignIsOn) {
        // Turn the help sign off and reset button text
        image.src = "images/all-good.png";
        statusText.innerText = "Good to Go!";
        button.innerText = "Turn Help Sign On";
    } else {
        // Turn the help sign on and reset button text
        image.src = "images/needs-help.png";
        statusText.innerText = "Help!";
        button.innerText = "Turn Help Sign Off";
    }
}

// Student 1 Div
const helpButton1 = document.getElementById("myBtn1");
const image1 = document.getElementById("img1");
const statusText1 = document.getElementById("statusText1");
let helpSign1IsOn = false;
helpButton1.addEventListener('click', async function() {
    toggleHelpSign(helpButton1, image1, statusText1, helpSign1IsOn);
    helpSign1IsOn = !helpSign1IsOn;
});

// Student 2 Div
const helpButton2 = document.getElementById("myBtn2");
const image2 = document.getElementById("img2");
const statusText2 = document.getElementById("statusText2");
let helpSign2IsOn = false;
helpButton2.addEventListener('click', async function() {
    toggleHelpSign(helpButton2, image2, statusText2, helpSign2IsOn);
    helpSign2IsOn = !helpSign2IsOn;
});

// Student 3 Div
const helpButton3 = document.getElementById("myBtn3");
const image3 = document.getElementById("img3");
const statusText3 = document.getElementById("statusText3");
let helpSign3IsOn = false;
helpButton3.addEventListener('click', async function() {
    toggleHelpSign(helpButton3, image3, statusText3, helpSign3IsOn);
    helpSign3IsOn = !helpSign3IsOn;
});