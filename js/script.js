let minutesContainer = document.getElementById('timer-minutes'),
    secondsContainer = document.getElementById('timer-seconds'),
    startButton = document.getElementById('start-button'),
    stopButton = document.getElementById('stop-button'),
    resetButton = document.getElementById('reset-button'),
    setTimerButton = document.getElementById('set-timer-button'),
    counter = 0,
    from = 300,
    timer,
    minutes = null,
    seconds = null,
    running = false,
    stopped = false;

update();

function showInputField()
{
    document.getElementById('timer').style.display = "none";
    document.getElementById('buttons').style.display = "none";
    document.getElementById('container').style.justifyContent = "center";
    document.getElementById('input-field').style.display = "flex";
}

function hideInputField()
{
    document.getElementById('timer').style.display = "flex";
    document.getElementById('buttons').style.display = "flex";
    document.getElementById('container').style.justifyContent = "center";
    document.getElementById('input-field').style.display = "none";
}

function update()
{
    minutesContainer.innerHTML = getMinutes();
    secondsContainer.innerHTML = getSeconds();
}

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
           update();
           loop();
       }, 1000);
   }
}

startButton.addEventListener('click', function() {
    if (!running) {
        running = true;
        stopped = false;
        loop();
    }
});

stopButton.addEventListener('click', function() {
    running = false;
    stopped = true;
    clearTimeout(timer);
});

resetButton.addEventListener('click', function() {
    running = false;
   clearTimeout(timer);
   counter = 0;
   from = 300;
   update();
});

setTimerButton.addEventListener('click', function() {
    if (!running && !stopped)
    {
        stopped = false;

        showInputField();

        document.getElementById('send').addEventListener('click', function() {
            let valid = /^[0-9]+$/,
                userMinutes = document.getElementById('user-minutes'),
                userSeconds = document.getElementById('user-seconds');

            if (userMinutes.value.match(valid) || userMinutes.value === "")
            {
                if (userMinutes.value !== "") {
                    minutes = userMinutes.value;
                } else {
                    minutes = 0;
                }
            } else {
                alert('** Message d\'erreur à faire **');
            }

            if (userSeconds.value.match(valid) || userSeconds.value === "")
            {
                if (userSeconds.value !== "") {
                    seconds = userSeconds.value;
                } else {
                    seconds = 0;
                }
            } else {
                alert('** Message d\'erreur à faire **');
            }

            from = parseInt((minutes * 60)) + parseInt(seconds);

            update();

            hideInputField();

        });
    }
});
