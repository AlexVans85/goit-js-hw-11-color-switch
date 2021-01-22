const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const setColor = randomIntegerFromInterval(0,colors.length - 1);
console.log(setColor);

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bgcolor = document.querySelector('body');
let isActive = false;
let timerId = null;

startBtnRef.addEventListener('click', () => {
if (!isActive) {
    isActive = true;
    timerId = setInterval(() => {
        const setColor = randomIntegerFromInterval(0,5);
        bgcolor.style.backgroundColor =   colors[setColor]
        console.log('work');
        },1000);}

         });

  stopBtnRef.addEventListener('click', () => {
    isActive = false;
    clearInterval(timerId);
    console.log('stop work');
     })







