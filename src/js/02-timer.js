import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  displayDays: document.querySelector('[data-days]'),
  displayHours: document.querySelector('[data-hours]'),
  displayMinutes: document.querySelector('[data-minutes]'),
  displaySeconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 6000,
        width: '300px',
        clickToClose: true,
        position: 'center-top',
      });
      selectedDate = new Date();
    } else {
      refs.startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

flatpickr(refs.dateInput, options);
refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
  intervalId = setInterval(() => {
    diff = selectedDate.getTime() - Date.now();

    if (diff <= 0) {
      clearInterval(intervalId);
    } else {
      updateTimerDisplay(diff);
      refs.startBtn.disabled = true;
      refs.dateInput.disabled = true;
    }
  }, 1000);
}

function updateTimerDisplay(data) {
  data = convertMs(diff);
  refs.displayDays.textContent = addLeadingZero(data.days);
  refs.displayHours.textContent = addLeadingZero(data.hours);
  refs.displayMinutes.textContent = addLeadingZero(data.minutes);
  refs.displaySeconds.textContent = addLeadingZero(data.seconds);
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
  return String(value).padStart(2, '0');
}
