import { getSortDocs } from "../firebase/firebase";

import { sort } from "./sorting/sorting";

import { DEFAULT_TYPE_SORT } from "../utils/const";

import { isNull } from "../utils/isNull";

import { addDeleteEventClick } from "./deleteBook/deleteBook";

import { editEventClick } from "./modalEdit/modalEdit";

import { Book } from "../interfaces/book";
import { preloader } from "../preloader/preloader";

export let booksListContainer = document.querySelector(
  ".books-list__container"
);

await getSortDocs(DEFAULT_TYPE_SORT, "asc").then(
  async (allBooks) => await renderBooks(sort(allBooks, DEFAULT_TYPE_SORT))
);

export async function renderBooks(allBooks: Book[]): Promise<void> {
  preloader.classList.remove("done");
  const bookYears =[]
   allBooks.map(e=>{
    bookYears.push(e.year)
  })
  const booksBastYear = [...new Set(bookYears)];
  
let yearcard = 0

    booksBastYear.forEach(e=>{
      let y = e
      e === 0 ? y = "Книги без указания года" : e
      booksListContainer.insertAdjacentHTML(
        "afterbegin",`
        <div class="book${e} carditam" style="display:flex;"><h2 style="width:150px;">${y}</h2></div></br>

        `)})
        
  allBooks.map(book=> {
    booksBastYear.forEach(yearcard=>{
      
        if(yearcard === book.year){
         document.querySelector(`.book${yearcard}`).insertAdjacentHTML(
          "afterbegin",
            `
             <div class="book-list__item book-list__item__hover-style">
      
      <div class="edit-delete" data-id=${book.id}>
      
        <button type="button" class="edit-book-button"><a data-id=${book.id
            } href="#" data-hystmodal="#myModal">Edit</a></button>
      
        <button type="button" class="delete-book-button">Delete</button>
      
      </div>
      
      <div class="book-list__item__img-container">
      
      <img src=${book.imageLink
            } alt="No image. Try entering the title of the book in another language" class="thumbnail" id="thumbnail">
      
      </div>
      
      <p class="book-list__item__name"><span class="book-item-span">Title: </span>
      
      ${isNull(book.name)}
      
      </p>
      
      <p class="book-list__item__author"><span class="book-item-span">Author: </span> ${isNull(
              book.author
            )}</p>
      
      <p class="book-list__item__year"><span class="book-item-span">Publication year: </span> ${isNull(
              book.year
            )}</p>
      
      <p class="book-list__item__rating"><span class="book-item-span">Rating: </span> ${isNull(
              book.rating
            )}</p>
      
      <p class="book-list__item__isbn"><span class="book-item-span">ISBN: </span> ${book.isbn
            }</p>
      
      </div>`)
          
      
  
        
    }
  

  })})

  addDeleteEventClick().then(() => preloader.classList.add("done"));

  editEventClick();
}

