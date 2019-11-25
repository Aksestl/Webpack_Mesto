import {api} from "./api.js";

class Card {
    constructor(name, link, id) {
      this.id = id;
      this.cardElement = this.createCard(name, link, id);
      this.likeCard = this.likeCard.bind(this);
      this.removeCard = this.removeCard.bind(this);
          
      this.cardElement
        .querySelector('.place-card__like-icon')
        .addEventListener('click',  this.likeCard);
      
      this.cardElement
        .querySelector('.place-card__delete-icon')
        .addEventListener('click',  this.removeCard);
      
    };
  
    likeCard(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    };
    
    removeCard() {
      const confirmed = confirm('Вы действительно хотите удалить карточку?');

        if (!confirmed) {
          return;
        }  

      api.deleteCard(this.id).then(() => {
        this.cardElement.remove((this.id));
      });
    }
   
    createCard(name, link) {
      const cardContainer = document.createElement('div');
      const imageElement = document.createElement('div');
      const buttonDeleteElement = document.createElement('button');
      const descriptionElement = document.createElement('div');
      const nameElement = document.createElement('h3');
      const buttonLLikeElement = document.createElement('button');
      
      cardContainer.classList.add('place-card');
      imageElement.classList.add('place-card__image');
      imageElement.style.backgroundImage = `url(${link})`;
      buttonDeleteElement.classList.add('place-card__delete-icon');
      descriptionElement.classList.add ('place-card__description');
      nameElement.classList.add('place-card__name');
      nameElement.textContent = name;
      buttonLLikeElement.classList.add('place-card__like-icon');
    
      cardContainer.appendChild(imageElement);
      imageElement.appendChild(buttonDeleteElement);
      cardContainer.appendChild(descriptionElement);
      descriptionElement.appendChild(nameElement);
      descriptionElement.appendChild(buttonLLikeElement);
      
      return cardContainer; 
    }
};

class CardList {
  constructor(container, api) {
    this.container = container;
  }
    
  addCard(name, link, id) {
    const { cardElement } = new Card(name, link, id);
    this.container.appendChild(cardElement);
  }
  
  addInitialCards() {
    api.getInitialCards().then(result => {
      this.result = result;
      this.renderCards();
    }) 
  }

  renderCards() {
    this.result.forEach(result => this.addCard(result.name, result.link, result._id));
  }
  
};

export {Card, CardList};
