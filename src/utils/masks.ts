import IMask from "imask";


//-----------------add-----------------------------------------
// var element = document.querySelector(".book-list__item__add__isbn");
// var maskOptions = {
//   mask: "0000000000000",
//   // mask: "000-0-000-00000-0",
// };
// IMask(element, maskOptions);


var element2 = document.querySelector<HTMLElement>(".book-list__item__add__year");
var maskOptions2 = {
  mask: Date,
  pattern: "00000",

};
IMask(element2, maskOptions2);

var element3 = document.querySelector<HTMLElement>(".book-list__item__add__rating");
var maskOptions3 = {
  mask: '00',
  pattern: "00",

};
IMask(element3, maskOptions3);
//-------------edit-----------------------------------------------


// var element4 = document.querySelector(".modal-edit__isbn");
// var maskOptions4 = {
//   mask: "0000000000000",
// };
// export let mask = IMask(element4, maskOptions4);

var element5 = document.querySelector<HTMLElement>(".modal-edit__rating");
var maskOptions5 = {
  mask: '00',
  pattern: "00",

};
IMask(element5, maskOptions5);

var element6 = document.querySelector<HTMLElement>(".modal-edit__year");
var maskOptions6 = {
  mask: Date,
  pattern: "00000",

};
IMask(element6, maskOptions6);
//-----------------------------------------------------------------