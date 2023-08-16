const  data= document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const todey = new Date();

const weekDays = 
["Sundey" , "Mondey", "Tuesdey", "Wednesdey", 
"Thursdey", "Fridey","Saturdey"];

const allMonths = 
["January","February", "March", "April","May","June",
"July","August","September", "October", "November","December"];

data.innerHTML = (todey.getDate()< 10 ? "0" : "") + todey.getDate();
day.innerHTML = weekDays[todey.getDay()];
month.innerHTML = allMonths[todey.getMonth()];
year.innerHTML = todey.getFullYear();