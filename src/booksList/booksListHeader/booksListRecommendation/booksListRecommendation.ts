import { Book } from '../../../interfaces/book';
import { getAllDocs } from "../../../firebase/firebase";
import { isNull } from "../../../utils/isNull";

let recommendationHeaderImg = document.querySelector<HTMLImageElement>(
  ".recommendation__header__thumbnail"
);
let recommendationHeaderName = document.querySelector<HTMLElement>(
  ".recommendation__book-list__item__name"
);
let recommendationHeaderAuthor = document.querySelector<HTMLElement>(
  ".recommendation__book-list__item__author"
);
let recommendationHeaderYear = document.querySelector<HTMLElement>(
  ".recommendation__book-list__item__year"
);
let recommendationHeaderRating = document.querySelector<HTMLElement>(
  ".recommendation__book-list__item__rating"
);
let recommendationHeaderIsbn = document.querySelector<HTMLElement>(
  ".recommendation__book-list__item__isbn"
);

let currentDate = new Date();

let currentYear = currentDate.getUTCFullYear();

await getAllDocs().then((allBooks) =>
  renderRecommendedBook(generationRecommendedBook(allBooks))
);


function renderRecommendedBook(recommendedBook: Book): void {
  console.log(recommendedBook);
  recommendationHeaderImg.src = recommendedBook.imageLink;
  recommendationHeaderName.innerHTML = `Title: ${isNull(recommendedBook.name)}`;
  recommendationHeaderAuthor.innerHTML = `Author: ${isNull(
    recommendedBook.author
  )}`;
  recommendationHeaderYear.innerHTML = `Year: ${isNull(recommendedBook.year)}`;
  recommendationHeaderRating.innerHTML = `Rating: ${isNull(
    recommendedBook.rating
  )}`;
  recommendationHeaderIsbn.innerHTML = `ISBN: ${isNull(recommendedBook.isbn)}`;
}

function generationRecommendedBook(allBooks: Book[]) {
  let index = 0;


  let sortedByYear = [];

  allBooks.forEach((book) => {
    if (book.year >= currentYear - 2) {
      sortedByYear.push(book);
    }
  });

  let maxRating = 0;


  sortedByYear.forEach((book) => {
    if (book.rating > maxRating) {
      maxRating = book.rating;
    }
  });

  let sortedByRating =[];

  sortedByYear.filter((book) => {
    if (book.rating <= maxRating) {
      sortedByRating.push(book);
    }
  });

  if (sortedByRating.length > 1) {
    index = Math.floor(Math.random() * sortedByRating.length);

    return sortedByRating[index];
  } else {
    return sortedByRating[index];
  }
}
