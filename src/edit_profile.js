import {api} from "./api.js";
import {Popup} from "./popup.js";

// открытие попапа (кнопочные)
const popupEdit = new Popup(document.querySelector("#popup-profile"));
function editPopupHandler() {
    popupEdit.openPopup();
}


// редактируем форму профиля 
const editProfileForm = document.forms.profile;
const profileNameInput = editProfileForm.elements.name;
const profileJobInput = editProfileForm.elements.job;


function editProfileHandler(event) {
  event.preventDefault();
  
    document.querySelector('.user-info__name').textContent = profileNameInput.value;
    document.querySelector('.user-info__job').textContent = profileJobInput.value;
    api.changeInfoProfile(profileNameInput.value, profileJobInput.value);
    
    popupEdit.closePopup();
}

// подгружаем данные пользователя с сервера
function showInfo(userData) {
 
  document.querySelector(".user-info__name").textContent = userData.name;
  document.querySelector(".user-info__photo").backgroundImage = `url(${userData.avatar})`;
  document.querySelector(".user-info__job").textContent = userData.about;

  profileNameInput.value = document.querySelector('.user-info__name').textContent; 
  profileJobInput.value = document.querySelector('.user-info__job').textContent;
}

api.getInfoUser().then(result => {
  showInfo(result);
}) 

export {editProfileForm, profileNameInput, profileJobInput, editPopupHandler, editProfileHandler};