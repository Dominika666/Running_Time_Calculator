const hoursInput = document.querySelector('.hours-input');
const minutesInput = document.querySelector('.minutes-input');
const secondsInput = document.querySelector('.seconds-input');

const distanceInput = document.querySelector('#distance');

const calculateBtn = document.querySelector('.calculate');

const pace = document.querySelector('.pace');
const speed = document.querySelector('.speed');

const standardDistance = document.querySelector('#standard-distance');



function disableInputs() {
    if (standardDistance.value > 0) {
        distanceInput.disabled = true
    } else {
        distanceInput.disabled = false
    }

}


const calculate = () => {

    const newHours = parseFloat(hoursInput.value);
    const newMinutes = parseFloat(minutesInput.value);
    const newSeconds = parseFloat(secondsInput.value);
    const newDistance = parseFloat(distanceInput.value);
    const newStandardDistance = parseFloat(standardDistance.value);


    const totalTime = (newHours * 60) + newMinutes + (newSeconds / 60);


    if (newStandardDistance === 0) {

        const paceResult = totalTime / newDistance;

        pace.textContent = Math.floor(paceResult) + (((paceResult - Math.floor(paceResult)) * 60).toFixed(2) / 100);


        const speedTime = newDistance / (totalTime / 60);
        speed.textContent = speedTime.toFixed(2);


    } else {

        const newPaceResult = totalTime / newStandardDistance;

        const calculatePace = Math.floor(newPaceResult) + (((newPaceResult - Math.floor(newPaceResult)) * 60).toFixed(2) / 100);

        pace.textContent = calculatePace.toFixed(2);

        const speedTime = newStandardDistance / (totalTime / 60);
        speed.textContent = speedTime.toFixed(2);

    }

};


calculateBtn.addEventListener('click', calculate);
standardDistance.addEventListener('input', disableInputs)









