const token = localStorage.getItem("jwt");

export default class Api {
 constructor({ baseUrl, headers }) {
  this._baseUrl = baseUrl;
  this._userUrl = `${this._baseUrl}/users/me`;
  this._cardsUrl = `${this._baseUrl}/cards`;
  this._likesUrl = `${this._baseUrl}/cards/likes`;
  this._headers = headers;
 }

 //Получение информации о пользователе

 getUserData() {
  return fetch(this._userUrl, {
   headers: this._headers,
  }).then(this._checkResponse);
 }

 //Сохранение редактирования профиля

 saveUserChanges({ name, about }) {
  return fetch(this._userUrl, {
   method: 'PATCH',
   headers: this._headers,
   body: JSON.stringify({
    name: name,
    about: about,
   }),
  }).then(this._checkResponse);
 }

 //Получение массива карточек с сервера

 getInitialCards() {
  return fetch(this._cardsUrl, {
   headers: this._headers,
  }).then(this._checkResponse);
 }

 //Добавление карточек на сервер

 postNewCard({ name, link }) {
  return fetch(this._cardsUrl, {
   method: 'POST',
   headers: this._headers,
   body: JSON.stringify({
    name: name,
    link: link,
   }),
  }).then(this._checkResponse);
 }

 //Удаление карточек

 deleteCard(cardId) {
  return fetch(`${this._cardsUrl}/${cardId}`, {
   method: 'DELETE',
   headers: this._headers,
  }).then(this._checkResponse);
 }

 //"Лайк" карточек

 likedCard(cardId, isLiked) {
  return fetch(`${this._likesUrl}/${cardId}`, {
   method: isLiked ? 'PUT' : 'DELETE',
   headers: this._headers,
  }).then(this._checkResponse);
 }

 //Снятие "лайка"
 dislikedCard(cardId) {
  return fetch(`${this._likesUrl}/${cardId}`, {
   method: 'DELETE',
   headers: this._headers,
  }).then(this._checkResponse);
 }

 //Обновление аватара

 changedAvatar(src) {
  return fetch(`${this._userUrl}/avatar`, {
   method: 'PATCH',
   headers: this._headers,
   body: JSON.stringify({
    avatar: src,
   }),
  }).then(this._checkResponse);
 }

 _checkResponse(res) {
  if (!res.ok) {
   return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
 }
}

console.log(token)

export const api = new Api({
 baseUrl: 'https://api.express.mesto.nomoredomains.work',
 headers: {
    Accept: "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
 },
});
