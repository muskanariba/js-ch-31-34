var today = new Date();
document.write(today + "<br");

var a = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
var month = today.getMonth();
alert("current month : " + a[month]);

var b = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
var day = today.getDay();
alert("today is : " + b[day]);

var c = prompt("enter day name");
if (c === "sunday" || c === "saturday") {
  alert("its a funday");
}

var date = +prompt("enter today date", "month,date,year");
if (date < 15) {
  alert("“First fifteen days of the month”");
} else {
  alert("“Last days of the month”.");
}

document.write(today + "<br>");
document.write(
  "elipsed milliseconds since january 1 , 1970 : " + today.getTime() + "<br>"
);
document.write(
  "elipsed minutes since january 1 , 1970 : " + today.getTime() / (1000 * 60)
);

var a = new Date().getHours();
if (a < 12) {
  alert("its AM");
} else {
  alert("its PM");
}

var laterdate = new Date("12 31 2020");
document.write(laterdate);

var ramadan = new Date("03 10 2024");
var res = today.getTime() - ramadan.getTime();
document.write("current date : " + today + "<br>");
document.write(
  Math.floor(res / (1000 * 60 * 60 * 24)) +
    " days passed since 1st ramadan,2024" +
    "<br>"
);
document.write("current date : " + today + "<br>");
var a = new Date(" 01 01 2015");
var res = today.getTime() - a.getTime();
document.write(Math.floor(res / 1000) + "<br>");

document.write("current date : " + today + "<br>");
document.write("curent hour : " + today.getHours() + "<br>");
document.write("1 hour ago : " + Number(today.getHours() - 1) + "<br>");

var hundred = new Date("06 27 1924");
alert("today is : " + today + " 100 years back it was :  " + hundred);

var userdate = prompt("please enter your age");
document.write("your age is : " + userdate + "<br>");
var x = today.getFullYear() - userdate;
document.write(" your birth year is : " + x + "<br>");

document.write("<h2>K-Electric Bill</h2>");
var username = prompt("enter your name ");
document.write("customer name : " + username + "<br>");
var month = prompt("enter current month ");
document.write("month name : " + month + "<br>");
var units = +prompt("enter number of units ");
document.write("number of units  : " + units + "<br>");
var charge = +prompt("enter charges per units ");
document.write("charges per units  : " + charge + "<br>");
var before = (units * charge).toFixed(2);
document.write("Net Amount Payable (within Due Date) : " + before + "<br>");
document.write("late payement surcharge : " + 350 + "<br>");
var res = Number(before);
document.write("after due date : ", res + 350);
