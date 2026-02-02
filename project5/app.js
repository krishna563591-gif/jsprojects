//get elements
let clock=document.getElementById("clock");
let date=document.getElementById("date");

// function /logic

function updateClock(){

// create a new date object(current date & time)
let now=new Date();
//get hours from current time.
let hours=now.getHours();
//get minutes
let minutes=now.getMinutes();
//get seconds
let seconds=now.getSeconds();
// add 0 infron if value is less than 10.
if(hours<10){
    hours="0"+hours;

}
if(minutes<10){
    minutes="0"+minutes;

}
if(seconds<10){
    seconds="0"+seconds;
}

let ampm;



// updating clock
clock.innerText=hours+":"+minutes+":" + seconds;
clock.innerText=hours+":"+minutes+":" + seconds;
clock.style.color="green";

};

// setInterval runs a function again & again
// 1000 milliseconds:1s.
setInterval(updateClock,1000);
// call once immediately so it doesnot wait 1 second.
updateClock();



// updating todays's date

function todayDate(){
let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1; // months start from 0
let year = today.getFullYear();
date.innerText= day+"/"+month+"/"+year;
};
todayDate();
 
