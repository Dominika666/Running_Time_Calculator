const hoursInput = document.querySelector('#hrs');
const minutesInput = document.querySelector('#min');
const secondsInput = document.querySelector('#sec');

const distanceInput = document.querySelector('#distance');

const calculateBtn = document.querySelector('.calculate');

const pace = document.querySelector('.pace');
const speed = document.querySelector('.speed');


const calculate = () => {

    const newHours = parseFloat(hoursInput.value);
    const newMinutes = parseFloat(minutesInput.value);
    const newSeconds = parseFloat(secondsInput.value);
    const newDistance = parseFloat(distanceInput.value);


    const totalTime = (newHours * 60) + newMinutes + (newSeconds / 60);

    const paceResult = totalTime / newDistance;

    pace.textContent = Math.floor(paceResult) + (((paceResult - Math.floor(paceResult)) * 60).toFixed(2) / 100);


    const speedTime = newDistance / (totalTime / 60)
    speed.textContent = speedTime.toFixed(2);



};

calculateBtn.addEventListener('click', calculate);







