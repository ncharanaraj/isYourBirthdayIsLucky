const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checker = document.querySelector("#check-number");
const showMessage = document.querySelector("#show-message")


function compareValue(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        showMessage.innerText = "Your birthday is LUCKY!"
    } else {
        showMessage.innerText = "Your birthday is NOT LUCKY!"
    }
}

function isYourBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValue(sum, luckyNumber.value);
    } else {
        showMessage.innerText = "Please enter all the fields"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checker.addEventListener('click', isYourBirthDateIsLucky)