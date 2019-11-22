

class Api {
    constructor(options) {
      this.url = options.serverUrl;
      this.key = options.headers.authorization;
    }
  
    getInfoUser(){
      return fetch(this.url + '/users/me', {
        method: 'GET',
        headers: {
          authorization: this.key
        }
      })
        .then(res => res.json())
        .catch((err) => {
          console.log(err);
        });
    }
  
    changeInfoProfile(nameValue, aboutValue) {
      fetch(this.url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this.key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameValue,
        about: aboutValue,
      })
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      })
        
      .catch((err) => {
        console.log(err);
      });
    }
  
    getInitialCards() {
      return fetch(this.url + '/cards', {
        method: 'GET',
        headers: {
          authorization: this.key
        }
      })
        .then(res => res.json()) 
        .then((result) => {
          console.log(result);   
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    loadNewCard(params){
      return fetch(this.url + '/cards', {
        method: 'POST',
        headers: {
          authorization: this.key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
    deleteCard(id){
      return fetch(this.url + '/cards/' + id, {
        method: 'DELETE',
        headers: {
          authorization: this.key
        },
      })
      .then(res => res.json())
      
      .catch((err) => {
        console.log(err);
      });
    }
  
    
}

const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort4' : 'https://praktikum.tk/cohort4';
const api = new Api({
  serverUrl,
  headers: {
    authorization: '96fbef44-67f9-4ca0-a156-313c7b1067c7',
    'Content-Type': 'application/json'
  }
});

export {Api, api};