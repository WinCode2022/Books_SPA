import { Book } from '../interfaces/book';
import { initializeApp } from "firebase/app";
import { getFirestore, OrderByDirection } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  orderBy,
  doc,
  query,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { fromDto, toDto } from '../mapper/mapper';
const firebaseConfig = {
  apiKey: "AIzaSyDpm2cukumdEP2EN1EDhgPUuTlfABbxllE",
  authDomain: "books-fd1cd.firebaseapp.com",
  databaseURL: "https://books-fd1cd-default-rtdb.firebaseio.com",
  projectId: "books-fd1cd",
  storageBucket: "books-fd1cd.appspot.com",
  messagingSenderId: "856892748218",
  appId: "1:856892748218:web:bdc30584cdb1de93316d83"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getSortDocs(sortingType: string, directionSort: OrderByDirection): Promise<Array<Book>> {
  let arr: Book[] = [];
  const documents = await getDocs(
    query(collection(db, "books"), orderBy(sortingType, directionSort))
  );

  documents.docs.forEach((doc) => {
    arr.push(fromDto(doc.data(), doc.id));
  });

  return arr;
}

export async function getAllDocs(): Promise<Array<Book>> {
  let arr: Book[] = [];
  const documents = await getDocs(collection(db, "books"));

  documents.docs.forEach((doc) => {
    arr.push(fromDto(doc.data(), doc.id));
  });
  return arr;
}

export async function setDoc(value: Book): Promise<void> {
  await addDoc(collection(db, "books"), value);
}

export async function deleteBook(id: string): Promise<void> {
  await deleteDoc(doc(db, "books", id));
}

export async function getDocById(id: string): Promise<Book> {
  const document = await getDoc(doc(db, "books", id));
  return fromDto(document.data(), id);
}

export async function updateDocById(updatedBook: Book, id: string): Promise<void> {
  await updateDoc(doc(db, "books", id), toDto(updatedBook));
}
