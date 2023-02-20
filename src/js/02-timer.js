import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const calendarBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

calendarBtnEl.disabled = true;
let timeToEnd = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notify.failure('Please choose a date in the future');
      calendarBtnEl.disabled = true;
      return;
    }
    calendarBtnEl.disabled = false;

    console.log(selectedDates[0]);
    calendarBtnEl.addEventListener('click', () =>
      handleTimer(selectedDates[0])
    );
  },
};

flatpickr('#datetime-picker', options);

function handleTimer(selectedDate) {
  if (timeToEnd) {
    return;
  }

  timeToEnd = selectedDate.getTime() - Date.now();

  if (timeToEnd > 0) {
    let timerInterval = setInterval(() => {
      timeToEnd -= 1000;
      if (timeToEnd < 1000) {
        clearInterval(timerInterval);
      }
      addLeadingZero(timeToEnd);
      console.log(convertMs(timeToEnd));
    }, 1000);
  }
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

function addLeadingZero(value) {
  const { days, hours, minutes, seconds } = convertMs(timeToEnd);
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}
