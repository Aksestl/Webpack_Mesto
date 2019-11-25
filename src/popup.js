class Popup {
    constructor(container) {
      this.container = container;
      this.container
      .querySelector('.popup__close')
      .addEventListener('click', this.closePopup.bind(this));
    }
  
    openPopup() {
      this.container.classList.add("popup_is-opened");
    }
  
    closePopup() {
      this.container.classList.remove("popup_is-opened");
    }
}

export {Popup};
