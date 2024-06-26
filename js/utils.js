const ALERT_SHOW_TIME = 5000;
const DATA_ERROR = 'data-error';

const body = document.querySelector('body');

const getRandomInteger = (minValue, maxValue) => {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const createElement = (element, className) => {
  const newElement = document.createElement(`${element}`);

  if (className) {
    newElement.classList.add(`${className}`);
  }
  return newElement;
};

const addModalOpen = () => {
  const modalOpen = document.querySelector('body');
  modalOpen.classList.toggle('modal-open');
};

const stopPropagationIfEscapeKey = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const showInformationAlert = (parametr) => {
  const dataAlert = document.querySelector(`#${parametr}`).content;
  const dataFragment = document.createDocumentFragment();

  dataFragment.append(dataAlert);

  return dataFragment;
};

const appendPopupInBody = (parametr, fragment) => {
  body.append(fragment);
  return body.querySelector(`.${parametr}`);
};

const showAlert = () => {
  const alertFragment = showInformationAlert(DATA_ERROR);
  const alert = appendPopupInBody(DATA_ERROR, alertFragment);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  getRandomArrayElement,
  isEnterKey,
  isEscapeKey,
  createElement,
  addModalOpen,
  showAlert,
  showInformationAlert,
  debounce,
  stopPropagationIfEscapeKey,
  appendPopupInBody
};
