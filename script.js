const hoursInput = document.querySelector('#hrs');
const minutesInput = document.querySelector('#min');
const secondsInput = document.querySelector('#sec');

const distanceInput = document.querySelector('#distance');

const calculateBtn = document.querySelector('.calculate');

const pace = document.querySelector('.pace');
const speed = document.querySelector('.speed');

const standardDistance = document.querySelector('#standard-distance');



const calculateYourDistance = () => {

    const newHours = parseFloat(hoursInput.value);
    const newMinutes = parseFloat(minutesInput.value);
    const newSeconds = parseFloat(secondsInput.value);
    const newDistance = parseFloat(distanceInput.value);
    const newStandardDistance = parseFloat(standardDistance.value);

    const totalTime = (newHours * 60) + newMinutes + (newSeconds / 60);


    if (newStandardDistance == 0) {

        const paceResult = totalTime / newDistance;

        pace.textContent = Math.floor(paceResult) + (((paceResult - Math.floor(paceResult)) * 60).toFixed(2) / 100);

        const speedTime = newDistance / (totalTime / 60);
        speed.textContent = speedTime.toFixed(2);


    } else {

        const newPaceResult = totalTime / newStandardDistance;
        pace.textContent = Math.floor(newPaceResult) + (((newPaceResult - Math.floor(newPaceResult)) * 60).toFixed(3) / 100);

        const speedTime = newStandardDistance / (totalTime / 60);
        speed.textContent = speedTime.toFixed(3);


    }

};




calculateBtn.addEventListener('click', calculateYourDistance);









