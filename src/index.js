import "./pages/index.css";
import {api} from "./api.js";
import {CardList} from "./card.js";
import {handleValidate} from "./validation.js";
import {editProfileForm, profileNameInput, profileJobInput, editPopupHandler, editProfileHandler} from "./edit_profile.js";
import {popupHandler, newCardForm, newCardNameInput, newCardLinkInput, bigImageHandler, addNewCardHandler} from "./edit_cards.js";




// загрузка карточек с сервера
const placesList = document.querySelector('.places-list');
const loadedCards = new CardList (placesList, api);
loadedCards.addInitialCards();

// обработчики событий
newCardForm.addEventListener('submit', addNewCardHandler); 
placesList.addEventListener('click', bigImageHandler); 
editProfileForm.addEventListener('submit', editProfileHandler);

document.querySelector(".user-info__button_edit").addEventListener("click", editPopupHandler);
document.querySelector(".user-info__button").addEventListener("click", popupHandler);

profileNameInput.addEventListener('input', handleValidate);
profileJobInput.addEventListener('input', handleValidate);
newCardNameInput.addEventListener('input', handleValidate);
newCardLinkInput.addEventListener('input', handleValidate);



