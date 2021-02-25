function mover(){
var secondHand = document.getElementById("secondHand");
secondHand.style.transform = "rotate("+tiemposeg+"deg)";
tiemposeg +=6;

var minuteHand = document.getElementById("minuteHand");
minuteHand.style.transform = "rotate("+tiempomin+"deg)";
tiempomin += 0.1;

var hourly = document.getElementById("hourly");
hourly.style.transform = "rotate("+tiempohor+"deg)";
tiempohor += 0.1/60;

var dayNum = new Date().getDate();
var dayNumber = document.getElementById("dayNumber");
dayNumber.innerHTML = dayNum;

var dayWeek = new Date().getDay();
var day = document.getElementById("day");
switch (dayWeek){
case 0:
dayWeek = "SUN";
break;
case 1:
dayWeek = "MON";
break;
case 2:
dayWeek = "TUE";
break;
case 3:
dayWeek = "WED";
break;
case 4:
dayWeek = "THU";
break;
case 5:
dayWeek = "FRI";
break;
case 6:
dayWeek = "SAT";
break;
	
}
day.innerHTML = dayWeek;
}

var second = new Date().getSeconds();
var tiemposeg = (second * 6);


var minute = new Date().getMinutes();
var tiempomin = (minute + (second / 60)) * 6;

var time = new Date().getHours();
var tiempohor = ((time - 12) * 30) + ((minute / 60) * 30);

setInterval(mover, 1000);