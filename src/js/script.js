/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars
{
  'use strict';
  const select = {
    templateOf: {
      book: '#template-book',
    },
    containerOf: {
      booksList: '.books-list',
    },
    book: {
        image: '.books-list .book__image',
      }
    };
  
  const classNames = {
    favorite: 'favorite',
  };
  
  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };
  
  function renderBooks(){
    for(let book of dataSource.books){
      const generatedHTML = templates.books(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      const menuContainer = document.querySelector(select.containerOf.booksList);
      menuContainer.appendChild(generatedDOM);
    }
  }
  const favoriteBooks = [];

  function initActions(){

  const books = document.querySelectorAll(select.book.image);

  for(let book of books){
    book.addEventListener('dblclick', function(event){
      event.preventDefault();
      book.classList.add(classNames.favorite);
      book = clickedElement.getAttribute('data-id');
      favoriteBooks.push(targetBook);
    });
  }
}
  renderBooks();
  initActions();
}