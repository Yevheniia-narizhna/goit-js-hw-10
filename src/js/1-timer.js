import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start-timer]');

const TIMER_DELAY = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;

flatpickr(calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });

      startBtn.disabled = false;
      const setTimer = () => {
        selectedDate = selectedDates[0].getTime();
        timer.start();
      };

      startBtn.addEventListener('click', setTimer);
    }
  },
});

const timer = {
  rootSelector: document.querySelector('.timer'),
  start() {
    intervalId = setInterval(() => {
      startBtn.disabled = true;
      calendar.disabled = true;
      currentDate = Date.now();
      const delta = selectedDate - currentDate;

      if (delta <= 0) {
        this.stop();

        return;
      }
      const { days, hours, minutes, seconds } = this.convertMs(delta);
      dataDays.textContent = this.addLeadingZero(days);
      dataHours.textContent = this.addLeadingZero(hours);
      dataMinutes.textContent = this.addLeadingZero(minutes);
      dataSeconds.textContent = this.addLeadingZero(seconds);
    }, TIMER_DELAY);
  },

  stop() {
    clearInterval(intervalId);
    this.intervalId = null;
    startBtn.disabled = true;
    calendar.disabled = false;
  },

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );

    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },
};
