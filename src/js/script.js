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
    renderBooks();
  }