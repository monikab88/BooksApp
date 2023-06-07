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
        const targetBook = book.getAttribute('data-id');
        console.log(book, favoriteBooks);

        if(!favoriteBooks.includes(targetBook)){
          book.classList.add(classNames.favorite);
          favoriteBooks.push(targetBook);   

        } else {  
          console.log(book, favoriteBooks);
          book.classList.remove(classNames.favorite);
          const index = favoriteBooks.indexOf(targetBook);
          favoriteBooks.splice(index, 1); 
        }
      });
    }
  }
  renderBooks();
  initActions();
}