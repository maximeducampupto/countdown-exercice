let minutesContainer = document.getElementById('timer-minutes'),
    secondsContainer = document.getElementById('timer-seconds'),
    startButton = document.getElementById('start-button'),
    stopButton = document.getElementById('stop-button'),
    resetButton = document.getElementById('reset-button'),
    setTimerButton = document.getElementById('set-timer-button'),
    counter = 0,
    from = 300,
    timer,
    running = false;

minutesContainer.innerHTML = '05';
secondsContainer.innerHTML = '00';

function getMinutes()
{
    let minutes =  Math.floor((from - counter) / 60);
    if (minutes >= 0 && minutes < 10)
    {
        return "0" + minutes;
    }

    return minutes;
}

function getSeconds()
{
    let seconds = Math.floor((from - counter) % 60);
    if (seconds >= 0 && seconds < 10)
    {
        return "0" + seconds;
    }

    return seconds;
}


function loop()
{
   if (running && counter < from)
   {
       console.log(counter);

       timer = setTimeout(function()
       {
           counter++;
           minutesContainer.innerHTML = getMinutes();
           secondsContainer.innerHTML = getSeconds();
           loop();
       }, 1000);
   }
}

startButton.addEventListener('click', function() {
    if (!running) {
        running = true;
        loop();
    }
});
stopButton.addEventListener('click', function() {
    running = false;
    clearTimeout(timer);
});

resetButton.addEventListener('click', function() {
    running = false;
   clearTimeout(timer);
   counter = 0;
   from = 300;
   minutesContainer.innerHTML = "05";
   secondsContainer.innerHTML = "00";
});

setTimerButton.addEventListener('click', function() {
    document.getElementById('timer').style.display = "none";
    document.getElementById('buttons').style.display = "none";
    document.getElementById('container').style.justifyContent = "center";
   document.getElementById('input-field').style.display = "flex";

});