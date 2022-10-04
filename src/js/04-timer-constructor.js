import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  // displayDays: document.querySelector('[data-days]'),
  // displayHours: document.querySelector('[data-hours]'),
  // displayMinutes: document.querySelector('[data-minutes]'),
  // displaySeconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;
let diff = 0;

refs.startBtn.disabled = true;

const notifyOptions = {
  timeout: 3000,
  width: '300px',
  position: 'center-center',
  backOverlay: true,
  clickToClose: true,
  closeButton: true,
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure(
        'Please choose a date in the future',
        notifyOptions
      );
      return;
    }
    refs.startBtn.disabled = false;
    selectedDate = selectedDates[0];
  },
};

flatpickr(refs.dateInput, options);

class Timer {
  #refs = {};
  constructor(selector) {
    this.selector = selector;
    this.intervalId = null;
    this.isActive = false;
  }

  start() {
    this.getRefs();
    Notiflix.Notify.success('Lets Go!', notifyOptions);
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const diff = selectedDate - Date.now();
      const data = this.convertMs(diff);
      Object.entries(data).forEach(([name, value], index) => {
        this.#refs.data[index].textContent = this.addLeadingZero(value);
      });

      if (diff <= 1000) {
        clearInterval(this.intervalId);
        Notiflix.Notify.info('Deadline!', notifyOptions);
      }
    }, 1000);
  }

  getRefs() {
    this.#refs.data = document.querySelectorAll(
      `${this.selector} .timer_js .value`
    );
  }

  convertMs(diff) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  }
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new Timer('.timers_js', selectedDate);

refs.startBtn.addEventListener('click', timer.start.bind(timer));
