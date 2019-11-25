import {editProfileForm} from "./edit_profile.js";
import {newCardForm} from "./edit_cards.js";

const popupButton = document.querySelector('.popup__button');
const profileButton = document.querySelector('#profile-button');

// ВАЛИДАЦИЯ ФОРМ (карточка, профиль)
function handleValidate (event) {
    event.preventDefault();
  
    validInput(event.target);
  
    profileButton.disabled = !editProfileForm.checkValidity();
    popupButton.disabled = !newCardForm.checkValidity();
  }
  
  function validInput(input) {
    const errorMessage = input.parentNode.querySelector('.error-message');
    const URL = 'url';
  
    if (input.validity.valueMissing) {
      errorMessage.textContent = 'Это обязательное поле';
      return false;
  
    } else if (input.type !== URL && (input.validity.tooShort || input.validity.tooLong)) {
      errorMessage.textContent = 'Должно быть от 2 до 30 символов';
      return false;
  
    } else if (input.type ===  URL && input.validity.typeMismatch){
      errorMessage.textContent = 'Здесь должна быть ссылка';
      return false;
  
    } else {
      errorMessage.textContent = '';
      return true;
    }  
};

export {popupButton, profileButton, handleValidate};