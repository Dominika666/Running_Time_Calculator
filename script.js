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

    const totalTime = () => {
        newHours * 60 + newMinutes + newSeconds / 60;

    }

    const newPace = () => {
        totalTime / newDistance;
    }



}

//calculateBtn.addEventListener("click", calculate)
console.log(newDistance)

// const calculate = () => {
//     ...onds = parseFloat(secondsInput.value);
//     const totalTime = newHours + newMinutes * (1 / 60) + newSecon...
//     );
//     const paceResult = (parseFloat(distanceInput.value) / totalTime).toFixed(2);
//     speed.textContent = paceResult + " km/h";
//     pace.textContent = ((1 / paceResult) * 60).toFixed(2) + " min";
//     };





