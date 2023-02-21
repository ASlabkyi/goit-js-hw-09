import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay });
      } else {
        return reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();

  const { target } = e;

  const delay = target.delay.value;
  const step = target.step.value;
  const amount = target.amount.value;

  resultPromise(delay, step, amount);
}

function resultPromise(delay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    const delayWithStep = Number(delay) + i * step;

    createPromise(i + 1, delayWithStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

formEl.addEventListener('submit', handleFormSubmit);
