import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

// заменяем паттерн "Магические числа и строки" на КОНСТАНТУ:
const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(evt) {
  const message = evt.target.value;
  console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение, но и имя, и все в одном обьекте

const formData = {};

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  // console.log(formData);

  const savedFormData = JSON.stringify(formData);
  console.log('savedFormData', savedFormData);

  console.log(localStorage.setItem('savedFormData', savedFormData));

  const saved = localStorage.getItem('savedFormData');
  console.log(JSON.parse(saved));
});
