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

    console.log(newDistance)

    const totalTime = (newHours * 60) + newMinutes + (newSeconds / 60);
    console.log(totalTime);


    const paceResult = totalTime.toFixed(2) / newDistance;
    pace.textContent = paceResult.toFixed(2);
    console.log(paceResult);

    const speedTime = newDistance / (totalTime/60)
    speed.textContent = speedTime.toFixed(2);
    console.log(speedTime);

};

calculateBtn.addEventListener('click', calculate);







