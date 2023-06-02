import { SortDirection } from './../../interfaces/sortDirection';
import { SortField } from './../../interfaces/sortField';
import { getSortDocs } from "../../firebase/firebase";
import { Book } from "../../interfaces/book";
import { DEFAULT_TYPE_SORT } from "../../utils/const";
import { renderBooks, booksListContainer } from "../booksList";

export let ShowSortingType = document.querySelector(".selected-sorting-type"); // тип сортировки

export let catalog: Book[] = [];

export let currentSortType: SortField = DEFAULT_TYPE_SORT;

export let sortBy: SortField;

const sortByYear = document.querySelector<HTMLElement>("[data-sorting='year']");
const sortByAuthor = document.querySelector<HTMLElement>("[data-sorting='author']");
const sortByRating = document.querySelector<HTMLElement>("[data-sorting='rating']");

sortByYear.addEventListener("click", () => handleClick(sortByYear));
sortByAuthor.addEventListener("click", () => handleClick(sortByAuthor));
sortByRating.addEventListener("click", () => handleClick(sortByRating));

function handleClick(sortType: HTMLElement): void {
  currentSortType = sortType.getAttribute("data-sorting") === 'author' ?
    'author' : sortType.getAttribute("data-sorting") === 'rating' ?
      'rating' : 'year';
  booksListContainer.innerHTML = "";
  setSortingType(currentSortType);
  getSortDocs(currentSortType, getOrderBySorting(currentSortType)).then(
    (allBooks) => {
      catalog = allBooks;
      renderBooks(sort(catalog, currentSortType));
    }
  );
}

function setSortingType(sortType: string): void {
  ShowSortingType.innerHTML = sortType;
}

export function getOrderBySorting(sortType: string): SortDirection {
  return sortType === "author" ? "desc" : "asc";
}

export function sort(catalog: Book[], sortingType: SortField): Book[] {
  let arr: Book[] = [];
  let listData: Set<string | number> = new Set();
  let sortedArr: Book[][] = [];

  if (sortingType === "author") {
    sortBy = "year";
  } else {
    sortBy = "author";
  }

  catalog.forEach((book) => {
    listData.add(book[sortingType]);
  });

  let listDataArr = Array.from(listData);

  for (let i = 0; i < listDataArr.length; i++) {
    let arrayBooks = catalog.filter(
      (book) => book[sortingType] === listDataArr[i]
    );
    sortedArr.push(arrayBooks);
  }
  sortedArr.forEach((v) => {
    if (v.length > 1) {
      v.sort((a, b) => {
        if (sortBy === "author") {
          if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return 1;
          if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return -1;
        } else {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
        }
      });
    }
  });

  return arr.concat(...sortedArr);
}
