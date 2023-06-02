import { setDoc, getSortDocs } from "../../../firebase/firebase";
import {
  sort,
  getOrderBySorting,
  currentSortType,
} from "../../sorting/sorting";
import { booksListContainer, renderBooks } from "../../booksList";
import { getThumbnailLink } from "../../../utils/getThumbnailLink";
import { checkIsbn } from "../../../utils/checkIsbn";
import { showMessage } from "../../../errorNoBooks/errorNoBooks";
import { preloader } from "../../../preloader/preloader";

let form = document.querySelector<HTMLFormElement>(".book-list__item__add");
form.addEventListener("submit", (e) => addBook(e));

async function addBook(event: Event): Promise<void> {
  event.preventDefault();
  preloader.classList.remove("done");
  await setDoc({
    name: (form.name as any).value.trim(),
    author: form.author.value.trim(),
    year: Number(form.year.value),
    rating: Number(form.rating.value),
    isbn: await checkIsbn(form.isbn.value).then((result) => result),
    imageLink: await getThumbnailLink((form.name as any).value).then((result) => result),
  })
    .then(
      () => {
        form.reset(),
          (booksListContainer.innerHTML = ""),
          getSortDocs(currentSortType, getOrderBySorting(currentSortType)).then(
            (allBooks) => {
              let catalog = allBooks;
              renderBooks(sort(catalog, currentSortType));
            }
          )
      }
    )
    .catch((error) => {
      preloader.classList.add("done");
      showMessage();
    });
}

