import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromisesEl = document.querySelector('.form');

const inputFirstDelay = document.querySelector('input[name="delay"]');

const inputDelayStep = document.querySelector('input[name="step"]');

const inputAmount = document.querySelector('input[name="amount"]');

formPromisesEl.addEventListener('submit', onformPromisesSubmit);

function onformPromisesSubmit(e) {
  e.preventDefault();
  let delay = Number(inputFirstDelay.value);

  let step = Number(inputDelayStep.value);

  let amount = Number(inputAmount.value);
  for (let i = 1; i <= amount; i += 1) {
    let promiseDelay = i === 1 ? delay : delay + step * (i - 1);
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  formPromisesEl.reset();
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
