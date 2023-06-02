import { DocumentData } from 'firebase/firestore';
import {
  getDocById,
  updateDocById,
  getSortDocs,
} from "../../firebase/firebase";
import { sort, getOrderBySorting, currentSortType } from "../sorting/sorting";
import { booksListContainer, renderBooks } from "../booksList";
import { checkIsbn } from "../../utils/checkIsbn";
import { getThumbnailLink } from "../../utils/getThumbnailLink";
import { isNull } from "../../utils/isNull";
import { preloader } from '../../preloader/preloader';
// import { mask } from "../../utils/masks";
import { HystModal } from '../../plugin/test.js';
import { Book } from '../../interfaces/book';
import { showMessage } from '../../errorNoBooks/errorNoBooks';

export const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

let modalEditName = document.querySelector<HTMLInputElement>(".modal-edit__name");
let modalEditAuthor = document.querySelector<HTMLInputElement>(".modal-edit__author");
let modalEditYear = document.querySelector<HTMLInputElement>(".modal-edit__year");
let modalEditRating = document.querySelector<HTMLInputElement>(".modal-edit__rating");
let modalEditIsbn = document.querySelector<HTMLInputElement>(".modal-edit__isbn");

let editForm = document.querySelector(".modal__edit-card");

let bookId: string = null;

editForm.addEventListener("submit", (e) => submitEditedBook(e));
async function submitEditedBook(e: Event): Promise<void> {
  preloader.classList.remove("done");
  e.preventDefault();

  await updateDocById(await editBook(), bookId)
    .catch(() => showMessage());

  booksListContainer.innerHTML = "";
  await getSortDocs(currentSortType, getOrderBySorting(currentSortType))
    .then((allBooks) => {
      let catalog = allBooks;
      renderBooks(sort(catalog, currentSortType));
    })
    .then(() => {
      myModal.close();
      preloader.classList.add("done");
    });
}
export async function editEventClick() {
  let editButtons = document.querySelectorAll(".edit-book-button");

  editButtons.forEach((editButton) =>
    editButton.addEventListener("click", (e) => {
      preloader.classList.remove("done");

      bookId = (e.target as HTMLButtonElement).dataset.id;
      getDocById((e.target as HTMLButtonElement).dataset.id).then((book) => {
        setValues(book);

        preloader.classList.add("done");
      });
    })
  );
}

function setValues(book: DocumentData): void {
  modalEditName.value = isNull(book.name);
  modalEditAuthor.value = isNull(book.author);
  modalEditYear.value = isNull(book.year);
  modalEditRating.value = isNull(book.rating);
  modalEditIsbn.value = isNull(book.isbn.replace(/✔️|❌/g, ""));
  // mask.updateValue();
}

async function editBook(): Promise<Book> {
  let updatedBook = {
    name: modalEditName.value,
    author: modalEditAuthor.value,
    year: Number(modalEditYear.value),
    rating: Number(modalEditRating.value),
    isbn: await checkIsbn(modalEditIsbn.value).then((result) => result),
    imageLink: await getThumbnailLink(modalEditName.value)
      .then(
        (result) => result
      ),
  };

  return updatedBook;
}
