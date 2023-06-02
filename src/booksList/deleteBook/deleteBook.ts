import { deleteBook, getSortDocs } from "../../firebase/firebase";
import { sort, getOrderBySorting, currentSortType } from "../sorting/sorting";
import { booksListContainer, renderBooks } from "../booksList";

export async function addDeleteEventClick(): Promise<void> {
  let deleteButtons = document.querySelectorAll<HTMLElement>(".delete-book-button");
  deleteButtons.forEach((deleteButton) =>
    deleteButton.addEventListener("click", (e) => handleClick(e))
  );
}

async function handleClick(e: Event): Promise<void> {
  await deleteBook((e.target as HTMLElement).parentElement.dataset.id);
  booksListContainer.innerHTML = "";
  await getSortDocs(
    currentSortType,
    getOrderBySorting(currentSortType)
  ).then((allBooks) => {
    let catalog = allBooks;
    renderBooks(sort(catalog, currentSortType));
  });
}
