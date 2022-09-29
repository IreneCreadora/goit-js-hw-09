import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const data = {
    delay: parseInt(refs.inputDelay.value),
    step: parseInt(refs.inputStep.value),
    amount: parseInt(refs.inputAmount.value),
  };
  makePromise(data);
}

function makePromise({ delay, step, amount }) {
  let calculatedDelay = delay;
  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, calculatedDelay).then(onFulfill).catch(onReject);
    calculatedDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFulfill({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    timeout: 6000,
    width: '300px',
    clickToClose: true,
    position: 'center-top',
  });
}

function onReject({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    timeout: 6000,
    width: '300px',
    clickToClose: true,
    position: 'center-top',
  });
}
