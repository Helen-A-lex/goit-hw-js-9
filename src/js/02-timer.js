import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');

const btnStart = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');

const hoursEl = document.querySelector('[data-hours]');

const minutesEl = document.querySelector('[data-minutes]');

const secondsEl = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onBtnStartClick);

btnStart.disabled = true;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] - currentDate > 0) {
      btnStart.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    }
  },
};
const fp = flatpickr('#datetime-picker', options);

function onBtnStartClick() {
  const selectedDate = fp.selectedDates[0];

  intervalId = setInterval(() => {
    const startTime = new Date();
    const differenceTime = selectedDate - startTime;

    btnStart.disabled = true;
    if (differenceTime < 0) {
      clearInterval(this.intervalId);
      return;
    }

    updateClockIndexes(convertMs(differenceTime));
  }, 1000);
}

function updateClockIndexes({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
