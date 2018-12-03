'use strict';
//1
let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  toDay = 'вт';
for (let i in week) {
  if (week[i] == 'сб' || week[i] == 'вс') {
    document.write(`<b>${week[i]}</b><br>`);
  } else if (week[i] == toDay) {
    document.write(`<i>${week[i]}</i><br>`);
  } else {
    document.write(`${week[i]}<br>`);
  }
}
document.write('<br>');
//2
let arr = [];
for (let i = 0; i < 7; i++) {
  arr.push(prompt('Введите 7 любых многоначных числел', ''));
}
arr.forEach(function (i) {
  if (i[0] == 3 || i[0] == 7) {
    document.write(`${i}<br>`);
  }
});