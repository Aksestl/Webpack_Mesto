import {api} from "./api.js";
import {Popup} from "./popup.js";
import {CardList} from "./card.js";
import {popupButton} from "./validation.js";

const pageCards = new CardList(document.querySelector(".places-list"));
const popupImage = new Popup(document.querySelector("#popup-big-img"));

const imagePopup = document.querySelector('#popup-big-img');
const bgPopup = document.querySelector('#popup-bg');

// открытие попапа(кнопочные)
const popupPlace = new Popup(document.querySelector("#popup-card"));

function popupHandler() {
    popupPlace.openPopup();
}

// добавляем карточку в форму
const newCardForm = document.forms.new;
const newCardNameInput = newCardForm.elements.name;
const newCardLinkInput = newCardForm.elements.link;

function addNewCardHandler(event) {
  event.preventDefault();

  const params = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value
  }
  api.loadNewCard(params);
  pageCards.addCard(params.name, params.link, params._id);

  newCardForm.reset();
  popupButton.disabled = newCardNameInput.value === '' && newCardLinkInput.value === '';
  popupPlace.closePopup();
}

// увеличиваем картинку 
function bigImageHandler(event) {
  if (event.target.classList.contains('place-card__image')) {
    
    const imgLink = event.target.getAttribute("style");
    let imgLinkBig = imgLink.slice(23, -3);
    bgPopup.style.backgroundImage = `url(${imgLinkBig})`;
    imagePopup.classList.add('#popup-bg');
    popupImage.openPopup();
  }
}

export {popupHandler, newCardForm, newCardNameInput, newCardLinkInput, bigImageHandler, addNewCardHandler};