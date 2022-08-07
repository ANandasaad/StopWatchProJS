const startBtn=document.querySelector('#startButton');
const resetBtn=document.querySelector('#restartButton');

let seconds=0;
let minutes=0;
let hours=0;

let leadingSec=0;
let leadingMin=0;
let leadingHours=0;

// variable for setInterval & timer
let timerInterval=null;
let timerStatus="Stopped";

//stopwatch function

function stopwatch()
{
    seconds++;

    if(seconds/60===1)
    {
        seconds=0;
        minutes++;
        if(minutes/60===1)
        {
            minutes=0;
            hours++;
        }
    }
    if(seconds<10)
    {
        leadingSec="0"+seconds.toString();
    }
    else{
        leadingSec=seconds;
    }
    if(minutes<10)
    {
        leadingMin="0"+minutes.toString();
    }
    else{
        leadingMin=minutes;
    }
    if(hours<10)
    {
        leadingHours="0"+hours.toString();
    }
    else{
        leadingHours=hours;
    }

    let displayTimer=document.getElementById('timer').innerText=
    leadingHours+":"+leadingMin+":"+leadingSec;

}

//window.setInterval(stopwatch,1)

startBtn.addEventListener('click',function(){
    if(timerStatus==="stopped")
    {
        timerInterval=window.setInterval(stopwatch,1000);
        document.getElementById('startButton').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus="started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startButton').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus="stopped";
    }
});

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;

    document.getElementById('timer').innerHTML="00:00:00";
});